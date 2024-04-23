import { useSoundfont } from "../../adapters";
import { useMount } from "../../utils/useMount/useMount";
import { useAudioContext } from "../AudioContextProvider";
import { Keyboard } from "./Keyboard";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext();
  const { loading, play, stop, load } = useSoundfont({ AudioContext });

  useMount(() => load());

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
