/*! For license information please see bundle.js.LICENSE.txt */
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Ic=ni(Pc||(Pc=Rc`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Fc=ni(Ac||(Ac=Rc`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Hc=(0,Co.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),zc=(0,Co.ZP)((function(e){const{className:t,classes:n,pulsate:a=!1,rippleX:o,rippleY:i,rippleSize:s,in:u,onExited:c,timeout:l}=e,[f,d]=r.useState(!1),p=(0,va.Z)(t,n.ripple,n.rippleVisible,a&&n.ripplePulsate),h={width:s,height:s,top:-s/2+i,left:-s/2+o},m=(0,va.Z)(n.child,f&&n.childLeaving,a&&n.childPulsate);return u||f||d(!0),r.useEffect((()=>{if(!u&&null!=c){const e=setTimeout(c,l);return()=>{clearTimeout(e)}}}),[c,u,l]),(0,$.jsx)("span",{className:p,style:h,children:(0,$.jsx)("span",{className:m})})}),{name:"MuiTouchRipple",slot:"Ripple"})(Nc||(Nc=Rc`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }