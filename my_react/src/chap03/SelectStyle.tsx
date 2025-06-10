import './SelectStyle.css';

type SelectStyleProps = {
  mode: string;
};

export default function SelectStyle({ mode }:SelectStyleProps) {
  return (
    <div className={`box ${mode === 'light' ? 'light' : 'dark'}`}>
      こんにちは、世界！
    </div>
  );
}