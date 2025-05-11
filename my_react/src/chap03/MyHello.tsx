type props = {
    myName: string | string[] | { name: string; age: number };
};


export default function MyHello(props: props) {
    // myName がオブジェクトの場合、そのプロパティにアクセス
    if (typeof props.myName === "object" && !Array.isArray(props.myName)) {
        return <div>こんにちは、{props.myName.name}さん！年齢は {props.myName.age} 歳です。</div>;
    }
    // myName が配列の場合、カンマ区切りで名前を表示
    if (Array.isArray(props.myName)) {
        return <div>こんにちは、{props.myName.join(", ")}さん！</div>;
    }
    // myName が文字列の場合、そのまま表示
    return (
        <div>こんにちは、{props.myName}さん！</div>
    );
}