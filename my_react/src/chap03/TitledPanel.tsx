type TitledPanelProps = {
    title: React.ReactNode;
    body: React.ReactNode;
}

export default function TitledPanel({ title, body }:TitledPanelProps) {
  return (
    <div style={{
      margin: 50,
      padding: 5,
      border: '1px solid #000',
      width: 'fit-content',
      boxShadow: '10px 5px 5px #999',
      backgroundColor: '#fff'
    }}>
      {title}
      <hr />
      {body}
    </div>
  );
}