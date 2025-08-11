import React from 'react';

const DesignTokenDemo = () => {
  return (
    <div className="p-8 bg-bg min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-text-primary mb-8">Design Token Demo</h1>
        
        {/* Surfaces */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-text-primary mb-4">Surfaces</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-surface border border-border rounded-lg">
              <h3 className="font-medium text-text-primary mb-2">Surface</h3>
              <p className="text-text-secondary text-sm">Primary surface color</p>
            </div>
            <div className="p-4 bg-surface-muted border border-border rounded-lg">
              <h3 className="font-medium text-text-primary mb-2">Surface Muted</h3>
              <p className="text-text-secondary text-sm">Muted surface color</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-medium text-text-primary mb-2">Card</h3>
              <p className="text-text-secondary text-sm">Card background</p>
            </div>
          </div>
        </section>

        {/* Brand Colors */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-text-primary mb-4">Brand Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={shade} className={`p-4 bg-brand-${shade} rounded-lg ${shade >= 500 ? 'text-white' : 'text-text-primary'}`}>
                <div className="font-medium">Brand {shade}</div>
                <div className="text-xs opacity-75">Pink spectrum</div>
              </div>
            ))}
          </div>
        </section>

        {/* Accent Colors */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-text-primary mb-4">Accent Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={shade} className={`p-4 bg-accent-${shade} rounded-lg ${shade >= 500 ? 'text-white' : 'text-text-primary'}`}>
                <div className="font-medium">Accent {shade}</div>
                <div className="text-xs opacity-75">Purple spectrum</div>
              </div>
            ))}
          </div>
        </section>

        {/* Text Colors */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-text-primary mb-4">Text Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-surface border border-border rounded-lg">
              <h3 className="font-medium text-text-primary mb-2">Text Primary</h3>
              <p className="text-text-primary">This is primary text with high contrast</p>
            </div>
            <div className="p-4 bg-surface border border-border rounded-lg">
              <h3 className="font-medium text-text-secondary mb-2">Text Secondary</h3>
              <p className="text-text-secondary">This is secondary text with medium contrast</p>
            </div>
            <div className="p-4 bg-surface border border-border rounded-lg">
              <h3 className="font-medium text-text-muted mb-2">Text Muted</h3>
              <p className="text-text-muted">This is muted text with lower contrast</p>
            </div>
          </div>
        </section>

        {/* Interactive Elements */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-text-primary mb-4">Interactive Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="btn-primary px-6 py-3 rounded-lg">
              Primary Button
            </button>
            <button className="btn-secondary px-6 py-3 rounded-lg">
              Secondary Button
            </button>
            <button className="btn-ghost px-6 py-3 rounded-lg">
              Ghost Button
            </button>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-text-primary mb-4">Form Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-text-primary mb-2">Input Field</label>
              <input 
                type="text" 
                placeholder="Enter text here..." 
                className="input w-full px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-text-primary mb-2">Card Example</label>
              <div className="card p-4">
                <h3 className="font-medium text-text-primary mb-2">Card Title</h3>
                <p className="text-text-secondary text-sm">This is a card component using the new design tokens.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Focus States */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-text-primary mb-4">Focus States</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="btn-primary px-6 py-3 rounded-lg focus-ring">
              Focusable Primary
            </button>
            <input 
              type="text" 
              placeholder="Focusable input..." 
              className="input w-full px-4 py-2 focus-ring"
            />
            <button className="btn-secondary px-6 py-3 rounded-lg focus-ring">
              Focusable Secondary
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignTokenDemo;
