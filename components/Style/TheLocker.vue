<template>
  <div class="frame">
    <div class="center">
      <div class="padlock">
        <div class="shackle">
          <div class="shackle-inside"></div>
        </div>
        <div class="base">
          <div class="base-inside">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
            <div class="line line-4"></div>
            <div class="line line-5"></div>
            <div class="line line-6"></div>
            <div class="line line-7"></div>
            <div class="line line-8"></div>
            <div class="line line-9"></div>
            <div class="line line-10"></div>
            <div class="line line-11"></div>
            <div class="line line-12"></div>
            <div class="line line-13"></div>
            <div class="line line-14"></div>
            <div class="line line-15"></div>
            <div class="line line-16"></div>
            <div class="line line-17"></div>
            <div class="line line-18"></div>
            <div class="line line-19"></div>
            <div class="line line-20"></div>
            <div class="line line-21"></div>
            <div class="line line-22"></div>
            <div class="line line-23"></div>
            <div class="line line-24"></div>
            <div class="line line-25"></div>
            <div class="line line-26"></div>
            <div class="line line-27"></div>
            <div class="line line-28"></div>
            <div class="line line-29"></div>
            <div class="line line-30"></div>
            <div class="line line-31"></div>
            <div class="line line-32"></div>
            <div class="line line-33"></div>
            <div class="line line-34"></div>
            <div class="line line-35"></div>
            <div class="line line-36"></div>
            <div class="line line-37"></div>
            <div class="line line-38"></div>
            <div class="line line-39"></div>
            <div class="line line-40"></div>
          </div>
          <div class="centro"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.frame {
  position: relative;
  bottom: 100px;
  width: 150px;
  height: 200px;
  color: #333;
  overflow: hidden;
}
.center {
  transform: translate(35%, 5%);
}
.padlock {
  width: 100%;
  height: 100%;
}
.shackle {
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 75px 75px 0 0;
  position: relative;
  top: 7px;
  left: -10px;
  box-shadow: 0px 0px 0px transparent,
    -3px -2px 2px rgba(146, 142, 142, 0.664) inset;
  transition: transform 0.3s 1s;
  transform: translateY(25px);
}
.shackle-inside {
  width: 72px;
  height: 72px;
  background-color: white;
  position: absolute;
  top: 5px;
  left: 3.5px;
  border-radius: 75px 75px 0 0;
  box-shadow: 3px 4px 2px 2px rgba(0, 0, 0, 0.04) inset,
    4px 5px 2px 3px rgba(0, 0, 0, 0.04) inset,
    -3px -2px 2px rgba(146, 142, 142, 0.664);
}
.base {
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  top: -11px;
  left: -19px;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.1),
    -2px -2px 2px rgba(146, 142, 142, 0.664) inset;
}
.base-inside {
  width: 100px;
  height: 100px;
  background-color: #232323;
  position: absolute;
  top: -1px;
  left: -1px;
  border-radius: 150px;
  transition: transform 1.5s 0.1s ease-in-out;
}

form:hover .base-inside {
  transform: rotate(180deg);
  cursor: pointer;
}
.centro {
  width: 20px;
  height: 20px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  box-shadow: -1px -2px 1px rgba(146, 142, 142, 1) inset,
    3px 3px 10px rgba(17, 28, 28, 1);
  cursor: pointer;
  transition: background-color 0.3s 0.6s, box-shadow 0.3s 0.8s;
}

.line:nth-child(5n + 1) {
  background-color: #fff;
  position: absolute;
  width: 2px;
  height: 15px;
  top: 45px;
  left: 50px;
}

.line {
  position: absolute;
  width: 2px;
  height: 10px;
  background-color: #fff;
  top: 45px;
  left: 50px;
}

.line-1 {
  transform: rotate(0deg) translateY(-10px);
}
.line-1:nth-child(5n + 1) {
  transform: rotate(0deg) translateY(-40px);
}
.line-2 {
  transform: rotate(9deg) translateY(-40px);
}
.line-2:nth-child(5n + 1) {
  transform: rotate(9deg) translateY(-40px);
}
.line-3 {
  transform: rotate(18deg) translateY(-40px);
}
.line-3:nth-child(5n + 1) {
  transform: rotate(18deg) translateY(-40px);
}
.line-4 {
  transform: rotate(27deg) translateY(-40px);
}
.line-4:nth-child(5n + 1) {
  transform: rotate(27deg) translateY(-40px);
}
.line-5 {
  transform: rotate(36deg) translateY(-40px);
}
.line-5:nth-child(5n + 1) {
  transform: rotate(36deg) translateY(-40px);
}
.line-6 {
  transform: rotate(45deg) translateY(-40px);
}
.line-6:nth-child(5n + 1) {
  transform: rotate(45deg) translateY(-40px);
}
.line-7 {
  transform: rotate(54deg) translateY(-40px);
}
.line-7:nth-child(5n + 1) {
  transform: rotate(54deg) translateY(-40px);
}
.line-8 {
  transform: rotate(63deg) translateY(-40px);
}
.line-8:nth-child(5n + 1) {
  transform: rotate(63deg) translateY(-40px);
}
.line-9 {
  transform: rotate(72deg) translateY(-40px);
}
.line-9:nth-child(5n + 1) {
  transform: rotate(72deg) translateY(-40px);
}
.line-10 {
  transform: rotate(81deg) translateY(-40px);
  background-color: red;
}
.line-10:nth-child(5n + 1) {
  transform: rotate(81deg) translateY(-40px);
}
.line-11 {
  transform: rotate(90deg) translateY(-40px);
}
.line-11:nth-child(5n + 1) {
  transform: rotate(90deg) translateY(-40px);
}
.line-12 {
  transform: rotate(99deg) translateY(-40px);
}
.line-12:nth-child(5n + 1) {
  transform: rotate(99deg) translateY(-40px);
}
.line-13 {
  transform: rotate(108deg) translateY(-40px);
}
.line-13:nth-child(5n + 1) {
  transform: rotate(108deg) translateY(-40px);
}
.line-14 {
  transform: rotate(117deg) translateY(-40px);
}
.line-14:nth-child(5n + 1) {
  transform: rotate(117deg) translateY(-40px);
}
.line-15 {
  transform: rotate(126deg) translateY(-40px);
}
.line-15:nth-child(5n + 1) {
  transform: rotate(126deg) translateY(-40px);
}
.line-16 {
  transform: rotate(135deg) translateY(-40px);
}
.line-16:nth-child(5n + 1) {
  transform: rotate(135deg) translateY(-40px);
}
.line-17 {
  transform: rotate(144deg) translateY(-40px);
}
.line-17:nth-child(5n + 1) {
  transform: rotate(144deg) translateY(-40px);
}
.line-18 {
  transform: rotate(153deg) translateY(-40px);
}
.line-18:nth-child(5n + 1) {
  transform: rotate(153deg) translateY(-40px);
}
.line-19 {
  transform: rotate(162deg) translateY(-40px);
}
.line-19:nth-child(5n + 1) {
  transform: rotate(162deg) translateY(-40px);
}
.line-20 {
  transform: rotate(171deg) translateY(-40px);
}
.line-20:nth-child(5n + 1) {
  transform: rotate(171deg) translateY(-40px);
}
.line-21 {
  transform: rotate(180deg) translateY(-40px);
}
.line-21:nth-child(5n + 1) {
  transform: rotate(180deg) translateY(-40px);
}
.line-22 {
  transform: rotate(189deg) translateY(-40px);
}
.line-22:nth-child(5n + 1) {
  transform: rotate(189deg) translateY(-40px);
}
.line-23 {
  transform: rotate(198deg) translateY(-40px);
}
.line-23:nth-child(5n + 1) {
  transform: rotate(198deg) translateY(-40px);
}
.line-24 {
  transform: rotate(207deg) translateY(-40px);
}
.line-24:nth-child(5n + 1) {
  transform: rotate(207deg) translateY(-40px);
}
.line-25 {
  transform: rotate(216deg) translateY(-40px);
}
.line-25:nth-child(5n + 1) {
  transform: rotate(216deg) translateY(-40px);
}
.line-26 {
  transform: rotate(225deg) translateY(-40px);
}
.line-26:nth-child(5n + 1) {
  transform: rotate(225deg) translateY(-40px);
}
.line-27 {
  transform: rotate(234deg) translateY(-40px);
}
.line-27:nth-child(5n + 1) {
  transform: rotate(234deg) translateY(-40px);
}
.line-28 {
  transform: rotate(243deg) translateY(-40px);
}
.line-28:nth-child(5n + 1) {
  transform: rotate(243deg) translateY(-40px);
}
.line-29 {
  transform: rotate(252deg) translateY(-40px);
}
.line-29:nth-child(5n + 1) {
  transform: rotate(252deg) translateY(-40px);
}
.line-30 {
  transform: rotate(261deg) translateY(-40px);
}
.line-30:nth-child(5n + 1) {
  transform: rotate(261deg) translateY(-40px);
}
.line-31 {
  transform: rotate(270deg) translateY(-40px);
}
.line-31:nth-child(5n + 1) {
  transform: rotate(270deg) translateY(-40px);
}
.line-32 {
  transform: rotate(279deg) translateY(-40px);
}
.line-32:nth-child(5n + 1) {
  transform: rotate(279deg) translateY(-40px);
}
.line-33 {
  transform: rotate(288deg) translateY(-40px);
}
.line-33:nth-child(5n + 1) {
  transform: rotate(288deg) translateY(-40px);
}
.line-34 {
  transform: rotate(297deg) translateY(-40px);
}
.line-34:nth-child(5n + 1) {
  transform: rotate(297deg) translateY(-40px);
}
.line-35 {
  transform: rotate(306deg) translateY(-40px);
}
.line-35:nth-child(5n + 1) {
  transform: rotate(306deg) translateY(-40px);
}
.line-36 {
  transform: rotate(315deg) translateY(-40px);
}
.line-36:nth-child(5n + 1) {
  transform: rotate(315deg) translateY(-40px);
}
.line-37 {
  transform: rotate(324deg) translateY(-40px);
}
.line-37:nth-child(5n + 1) {
  transform: rotate(324deg) translateY(-40px);
}
.line-38 {
  transform: rotate(333deg) translateY(-40px);
}
.line-38:nth-child(5n + 1) {
  transform: rotate(333deg) translateY(-40px);
}
.line-39 {
  transform: rotate(342deg) translateY(-40px);
}
.line-39:nth-child(5n + 1) {
  transform: rotate(342deg) translateY(-40px);
}
.line-40 {
  transform: rotate(351deg) translateY(-40px);
}
.line-40:nth-child(5n + 1) {
  transform: rotate(351deg) translateY(-40px);
}
form:hover .shackle {
  transform: translateY(0);
}
form:hover .centro {
  background-color: #44bd32;
  box-shadow: -1px -2px 1px darkgreen inset, 3px 3px 10px rgba(17, 28, 28, 1);
}
form:hover .line:nth-child(even) {
  background-color: #e84118;
  transition: background-color 0.3s 0.6s;
}
form:hover .line:nth-child(odd) {
  background-color: #00a8ff;
  transition: background-color 0.3s 0.8s;
}
</style>