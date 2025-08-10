import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ConfirmBox = ({
  successText,
  rejectText,
  onSuccess,
  open,
  onReject,
  title,
  subTitle,
  subTitleColor,
}) => {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" /> 
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center  text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-11/12 max-w-md transform overflow-hidden rounded bg-surface p-4 text-left align-middle shadow-xl transition-all border border-neutral-200">
                  <Dialog.Title className="text-base font-medium text-text ">
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p
                      className="text-base text-text"
                      style={{
                        color: subTitleColor ? subTitleColor : "rgb(var(--text-muted))",
                      }}
                    >
                      {subTitle}
                    </p>
                  </div>

                  <div className="mt-6 flex justify-end">
                    {rejectText && (
                      <button
                        type="button"
                        className="mr-2 rounded px-4 py-2 text-sm font-medium text-text hover:bg-neutral-200 "
                        onClick={onReject}
                      >
                        {rejectText}
                      </button>
                    )}
                    <button
                      type="button"
                      className="rounded border border-neutral-200 bg-transparent px-4 py-2 text-sm font-medium text-text hover:bg-neutral-200"
                      onClick={onSuccess}
                    >
                      {successText}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ConfirmBox;
