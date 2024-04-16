import { useEffect } from "react";

const MusicPlayer: React.FC<{src :string}> = ({ src }) =>  {
    useEffect(() => {
        const audio = new Audio(src);
        audio.loop = true;
        let playPromise = audio.play();
        //https://developer.chrome.com/blog/play-request-was-interrupted?hl=ko
        //.play가 안될 수 도 있기 때문에 추가
        if (playPromise !== undefined) {
            playPromise.then(_ => {
              // Automatic playback started!
              // Show playing UI.
            })
            .catch(error => {
              // Auto-play was prevented
              // Show paused UI.
            });
          }       
        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [src]);

    return null; // 오디오를 화면에 렌더링하지 않으므로 null을 반환합니다
}

export default MusicPlayer;
