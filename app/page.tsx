import SmoothScroll from "@/components/SmoothScroll";
import Opening from "@/components/Opening";
import Scene from "@/components/Scene";
import Finale from "@/components/Finale";
import AmbientAudio from "@/components/AmbientAudio";
import { scenes } from "@/content/story";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="film-grain" />
      <main>
        <Opening />
        {scenes.map((scene, i) => (
          <Scene key={scene.id} scene={scene} index={i} />
        ))}
        <Finale />
      </main>
      <AmbientAudio />
    </SmoothScroll>
  );
}
