import { useState } from "react";

type props = {
    type: string;
};

export default function EventBasic({ type }: props) {
    const [currentTime, setCurrentTime] = useState("");

    const current = () => {
        const d = new Date();
        switch (type) {
            case "date":
                setCurrentTime(d.toLocaleDateString());
                break;
            case "time":
                setCurrentTime(d.toLocaleTimeString());
                break;
            default:
                setCurrentTime(d.toLocaleString());
                break;
        }
    };

    return (
        <div>
            {/* ボタンクリック時にcurrent関数を呼び出し */}
            <button onClick={current}>現在時刻を取得</button>
            <p>{currentTime}</p>
        </div>
    );
}