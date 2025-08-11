import { MeetingProvider } from "@videosdk.live/react-sdk";
import { useEffect, useCallback, useMemo } from "react";
import { useState } from "react";
import { MeetingAppProvider } from "./MeetingAppContextDef";
import { MeetingContainer } from "./meeting/MeetingContainer";
import { LeaveScreen } from "./components/screens/LeaveScreen";
import { JoiningScreen } from "./components/screens/JoiningScreen"
import ThemeToggle from "./components/ThemeToggle";
import LoadingOverlay from "./components/LoadingOverlay";
import { initTheme, subscribeSystemPreference, subscribeThemeStorage } from "./lib/theme";
import logo from "./pictures/logo.png";

function App() {
  const [token, setToken] = useState("");
  const [meetingId, setMeetingId] = useState("");
  const [participantName, setParticipantName] = useState("");
  const [micOn, setMicOn] = useState(false);
  const [webcamOn, setWebcamOn] = useState(false);
  const [customAudioStream, setCustomAudioStream] = useState(null);
  const [customVideoStream, setCustomVideoStream] = useState(null)
  const [isMeetingStarted, setMeetingStarted] = useState(false);
  const [isMeetingLeft, setIsMeetingLeft] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isMobile = useMemo(() => 
    window.matchMedia("only screen and (max-width: 768px)").matches, 
    []
  );

  useEffect(() => {
    // Initialize theme and subscribe to system changes (if no stored pref)
    initTheme();
    const unsubscribeSys = subscribeSystemPreference();
    const unsubscribeStorage = subscribeThemeStorage();
    
    // Simulate loading time for demo purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => {
      unsubscribeSys && unsubscribeSys();
      unsubscribeStorage && unsubscribeStorage();
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      window.onbeforeunload = () => {
        return "Are you sure you want to exit?";
      };
    }
  }, [isMobile]);

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />
      <MeetingAppProvider>
        <div className="fixed top-3 left-3 z-50 flex items-center gap-2">
          <img src={logo} alt="brand" className="h-20 w-auto opacity-80 hidden md:block" />
          <ThemeToggle />
        </div>
        {isMeetingStarted ? (

          <MeetingProvider
            config={{
              meetingId,
              micEnabled: micOn,
              webcamEnabled: webcamOn,
              name: participantName ? participantName : "TestUser",
              multiStream: true,
              customCameraVideoTrack: customVideoStream,
              customMicrophoneAudioTrack: customAudioStream
            }}
            token={token}
            reinitialiseMeetingOnConfigChange={true}
            joinWithoutUserInteraction={true}
          >
            <MeetingContainer
              onMeetingLeave={() => {
                setToken("");
                setMeetingId("");
                setParticipantName("");
                setWebcamOn(false);
                setMicOn(false);
                setMeetingStarted(false);
              }}
              setIsMeetingLeft={setIsMeetingLeft}
            />
          </MeetingProvider>

        ) : isMeetingLeft ? (
          <LeaveScreen setIsMeetingLeft={setIsMeetingLeft} />
        ) : (

          <JoiningScreen
            participantName={participantName}
            setParticipantName={setParticipantName}
            setMeetingId={setMeetingId}
            setToken={setToken}
            micOn={micOn}
            setMicOn={setMicOn}
            webcamOn={webcamOn}
            setWebcamOn={setWebcamOn}
            customAudioStream={customAudioStream}
            setCustomAudioStream={setCustomAudioStream}
            customVideoStream={customVideoStream}
            setCustomVideoStream={setCustomVideoStream}
            onClickStartMeeting={() => {
              setMeetingStarted(true);
            }}
            startMeeting={isMeetingStarted}
            setIsMeetingLeft={setIsMeetingLeft}
          />
        )}
      </MeetingAppProvider>
    </>
  );
}

export default App;
