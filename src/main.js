import * as Tone from "tone";
const synth = new Tone.Synth().toDestination();
const now = Tone.now();
//przyciski
const a1n1Btn = document.querySelector("#btn");
const a2n1Btn = document.querySelector("#btn2");

a1n1Btn.addEventListener("mousedown", async () => {
  await Tone.start();

  synth.triggerAttack("A1", now);
});

a1n1Btn.addEventListener("mouseup", () => {
  synth.triggerRelease(now + 1.5);
});
/*
a2n1Btn.addEventListener("mousedown", async () => {
  await Tone.start();

  synth.triggerAttack("d5", now);
});*/

a2n1Btn.addEventListener("mouseup", () => {
  synth.triggerRelease(now + 1.5);
});

const czarneKlawisze = document.querySelectorAll(".klawisz-czarny");

czarneKlawisze.forEach((klawisz) => {
  klawisz.addEventListener("mousedown", (e) => {
    e.stopPropagation();
  });
});
