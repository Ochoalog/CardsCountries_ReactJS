export default function Header({ children }) {

  let fontSize = 'text-3xl';

  return (
    <header>
      <div className="bg-green-400 mx-auto p-4">
        <h1 className={`text-center font-semibold ${fontSize}`}>
          {children}
        </h1>
      </div>
    </header>
  );
}
