export function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Pink blob - top left */}
      <div
        className="blob blob-pink"
        style={{
          width: '500px',
          height: '500px',
          top: '-100px',
          left: '-100px',
        }}
      />

      {/* Yellow blob - bottom right */}
      <div
        className="blob blob-yellow"
        style={{
          width: '400px',
          height: '400px',
          bottom: '10%',
          right: '-50px',
        }}
      />

      {/* Blue blob - top right */}
      <div
        className="blob blob-blue"
        style={{
          width: '350px',
          height: '350px',
          top: '20%',
          right: '-80px',
        }}
      />

      {/* Lilac blob - middle left */}
      <div
        className="blob blob-lilac"
        style={{
          width: '300px',
          height: '300px',
          top: '50%',
          left: '-100px',
        }}
      />

      {/* Additional subtle pink blob - bottom center */}
      <div
        className="blob blob-pink"
        style={{
          width: '450px',
          height: '450px',
          bottom: '-150px',
          left: '30%',
          opacity: 0.4,
        }}
      />
    </div>
  );
}

