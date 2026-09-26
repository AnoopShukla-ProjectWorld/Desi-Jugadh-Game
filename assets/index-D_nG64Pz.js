(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fa="170",Wo=0,sr=1,Xo=2,ro=1,oo=2,ln=3,An=0,Ie=1,qe=2,En=0,ci=1,ar=2,rr=3,or=4,qo=5,Bn=100,Yo=101,Ko=102,Zo=103,jo=104,$o=200,Jo=201,Qo=202,tc=203,js=204,$s=205,ec=206,nc=207,ic=208,sc=209,ac=210,rc=211,oc=212,cc=213,lc=214,Js=0,Qs=1,ta=2,ui=3,ea=4,na=5,ia=6,sa=7,co=0,hc=1,uc=2,bn=0,dc=1,fc=2,pc=3,mc=4,gc=5,_c=6,xc=7,lo=300,di=301,fi=302,aa=303,ra=304,gs=306,oa=1e3,zn=1001,ca=1002,Ze=1003,vc=1004,zi=1005,Je=1006,Ms=1007,Gn=1008,fn=1009,ho=1010,uo=1011,Ii=1012,Oa=1013,Hn=1014,hn=1015,Ni=1016,Ba=1017,ka=1018,pi=1020,fo=35902,po=1021,mo=1022,Ke=1023,go=1024,_o=1025,li=1026,mi=1027,xo=1028,za=1029,vo=1030,Ga=1031,Ha=1033,cs=33776,ls=33777,hs=33778,us=33779,la=35840,ha=35841,ua=35842,da=35843,fa=36196,pa=37492,ma=37496,ga=37808,_a=37809,xa=37810,va=37811,Ma=37812,ya=37813,Sa=37814,wa=37815,Ta=37816,Ea=37817,ba=37818,Aa=37819,Pa=37820,Ra=37821,ds=36492,Ca=36494,Da=36495,Mo=36283,Ia=36284,La=36285,Ua=36286,Mc=3200,yc=3201,yo=0,Sc=1,Tn="",ke="srgb",_i="srgb-linear",_s="linear",ce="srgb",qn=7680,cr=519,wc=512,Tc=513,Ec=514,So=515,bc=516,Ac=517,Pc=518,Rc=519,lr=35044,hr="300 es",un=2e3,ps=2001;class xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const a=i.indexOf(e);a!==-1&&i.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ur=1234567;const Ci=Math.PI/180,Li=180/Math.PI;function vi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[s&255]+Ee[s>>8&255]+Ee[s>>16&255]+Ee[s>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Re(s,t,e){return Math.max(t,Math.min(e,s))}function Va(s,t){return(s%t+t)%t}function Cc(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Dc(s,t,e){return s!==t?(e-s)/(t-s):0}function Di(s,t,e){return(1-e)*s+e*t}function Ic(s,t,e,n){return Di(s,t,1-Math.exp(-e*n))}function Lc(s,t=1){return t-Math.abs(Va(s,t*2)-t)}function Uc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Nc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Fc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Oc(s,t){return s+Math.random()*(t-s)}function Bc(s){return s*(.5-Math.random())}function kc(s){s!==void 0&&(ur=s);let t=ur+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zc(s){return s*Ci}function Gc(s){return s*Li}function Hc(s){return(s&s-1)===0&&s!==0}function Vc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xc(s,t,e,n,i){const a=Math.cos,r=Math.sin,o=a(e/2),c=r(e/2),l=a((t+n)/2),u=r((t+n)/2),d=a((t-n)/2),p=r((t-n)/2),m=a((n-t)/2),_=r((n-t)/2);switch(i){case"XYX":s.set(o*u,c*d,c*p,o*l);break;case"YZY":s.set(c*p,o*u,c*d,o*l);break;case"ZXZ":s.set(c*d,c*p,o*u,o*l);break;case"XZX":s.set(o*u,c*_,c*m,o*l);break;case"YXY":s.set(c*m,o*u,c*_,o*l);break;case"ZYZ":s.set(c*_,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ri(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ae(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Qt={DEG2RAD:Ci,RAD2DEG:Li,generateUUID:vi,clamp:Re,euclideanModulo:Va,mapLinear:Cc,inverseLerp:Dc,lerp:Di,damp:Ic,pingpong:Lc,smoothstep:Uc,smootherstep:Nc,randInt:Fc,randFloat:Oc,randFloatSpread:Bc,seededRandom:kc,degToRad:zc,radToDeg:Gc,isPowerOfTwo:Hc,ceilPowerOfTwo:Vc,floorPowerOfTwo:Wc,setQuaternionFromProperEuler:Xc,normalize:Ae,denormalize:ri};class Zt{constructor(t=0,e=0){Zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*i+t.x,this.y=a*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,i,a,r,o,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,c,l)}set(t,e,n,i,a,r,o,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=a,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],p=n[2],m=n[5],_=n[8],g=i[0],f=i[3],h=i[6],S=i[1],T=i[4],x=i[7],D=i[2],b=i[5],P=i[8];return a[0]=r*g+o*S+c*D,a[3]=r*f+o*T+c*b,a[6]=r*h+o*x+c*P,a[1]=l*g+u*S+d*D,a[4]=l*f+u*T+d*b,a[7]=l*h+u*x+d*P,a[2]=p*g+m*S+_*D,a[5]=p*f+m*T+_*b,a[8]=p*h+m*x+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*r*u-e*o*l-n*a*u+n*o*c+i*a*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*r-o*l,p=o*c-u*a,m=l*a-r*c,_=e*d+n*p+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(i*l-u*n)*g,t[2]=(o*n-i*r)*g,t[3]=p*g,t[4]=(u*e-i*c)*g,t[5]=(i*a-o*e)*g,t[6]=m*g,t[7]=(n*c-l*e)*g,t[8]=(r*e-n*a)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+t,-i*l,i*c,-i*(-l*r+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ys.makeScale(t,e)),this}rotate(t){return this.premultiply(ys.makeRotation(-t)),this}translate(t,e){return this.premultiply(ys.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ys=new Xt;function wo(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ms(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qc(){const s=ms("canvas");return s.style.display="block",s}const dr={};function Pi(s){s in dr||(dr[s]=!0,console.warn(s))}function Yc(s,t,e){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function Kc(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zc(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(s.r=dn(s.r),s.g=dn(s.g),s.b=dn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Tn?_s:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function dn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function hi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const fr=[.64,.33,.3,.6,.15,.06],pr=[.2126,.7152,.0722],mr=[.3127,.329],gr=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_r=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[_i]:{primaries:fr,whitePoint:mr,transfer:_s,toXYZ:gr,fromXYZ:_r,luminanceCoefficients:pr,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:fr,whitePoint:mr,transfer:ce,toXYZ:gr,fromXYZ:_r,luminanceCoefficients:pr,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});let Yn;class jc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yn===void 0&&(Yn=ms("canvas")),Yn.width=t.width,Yn.height=t.height;const n=Yn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ms("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=dn(a[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(dn(e[n]/255)*255):e[n]=dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $c=0;class To{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(Ss(i[r].image)):a.push(Ss(i[r]))}else a=Ss(i);n.url=a}return e||(t.images[this.uuid]=n),n}}function Ss(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jc=0;class Ce extends xi{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=zn,i=zn,a=Je,r=Gn,o=Ke,c=fn,l=Ce.DEFAULT_ANISOTROPY,u=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=vi(),this.name="",this.source=new To(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oa:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oa:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=lo;Ce.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,i=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,a;const c=t.elements,l=c[0],u=c[4],d=c[8],p=c[1],m=c[5],_=c[9],g=c[2],f=c[6],h=c[10];if(Math.abs(u-p)<.01&&Math.abs(d-g)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+g)<.1&&Math.abs(_+f)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,x=(m+1)/2,D=(h+1)/2,b=(u+p)/4,P=(d+g)/4,C=(_+f)/4;return T>x&&T>D?T<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(T),i=b/n,a=P/n):x>D?x<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(x),n=b/i,a=C/i):D<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(D),n=P/a,i=C/a),this.set(n,i,a,e),this}let S=Math.sqrt((f-_)*(f-_)+(d-g)*(d-g)+(p-u)*(p-u));return Math.abs(S)<.001&&(S=1),this.x=(f-_)/S,this.y=(d-g)/S,this.z=(p-u)/S,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qc extends xi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Ce(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new To(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends Qc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Eo extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tl extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,a,r,o){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3];const p=a[r+0],m=a[r+1],_=a[r+2],g=a[r+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(d!==g||c!==p||l!==m||u!==_){let f=1-o;const h=c*p+l*m+u*_+d*g,S=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const D=Math.sqrt(T),b=Math.atan2(D,h*S);f=Math.sin(f*b)/D,o=Math.sin(o*b)/D}const x=o*S;if(c=c*f+p*x,l=l*f+m*x,u=u*f+_*x,d=d*f+g*x,f===1-o){const D=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=D,l*=D,u*=D,d*=D}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,a,r){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=a[r],p=a[r+1],m=a[r+2],_=a[r+3];return t[e]=o*_+u*d+c*m-l*p,t[e+1]=c*_+u*p+l*d-o*m,t[e+2]=l*_+u*m+o*p-c*d,t[e+3]=u*_-o*d-c*p-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,a=t._z,r=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),d=o(a/2),p=c(n/2),m=c(i/2),_=c(a/2);switch(r){case"XYZ":this._x=p*u*d+l*m*_,this._y=l*m*d-p*u*_,this._z=l*u*_+p*m*d,this._w=l*u*d-p*m*_;break;case"YXZ":this._x=p*u*d+l*m*_,this._y=l*m*d-p*u*_,this._z=l*u*_-p*m*d,this._w=l*u*d+p*m*_;break;case"ZXY":this._x=p*u*d-l*m*_,this._y=l*m*d+p*u*_,this._z=l*u*_+p*m*d,this._w=l*u*d-p*m*_;break;case"ZYX":this._x=p*u*d-l*m*_,this._y=l*m*d+p*u*_,this._z=l*u*_-p*m*d,this._w=l*u*d+p*m*_;break;case"YZX":this._x=p*u*d+l*m*_,this._y=l*m*d+p*u*_,this._z=l*u*_-p*m*d,this._w=l*u*d-p*m*_;break;case"XZY":this._x=p*u*d-l*m*_,this._y=l*m*d-p*u*_,this._z=l*u*_+p*m*d,this._w=l*u*d+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],a=e[8],r=e[1],o=e[5],c=e[9],l=e[2],u=e[6],d=e[10],p=n+o+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-c)*m,this._y=(a-l)*m,this._z=(r-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-c)/m,this._x=.25*m,this._y=(i+r)/m,this._z=(a+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(a-l)/m,this._x=(i+r)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(r-i)/m,this._x=(a+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,a=t._z,r=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+r*o+i*l-a*c,this._y=i*u+r*c+a*o-n*l,this._z=a*u+r*l+n*c-i*o,this._w=r*u-n*o-i*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,a=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-e)*u)/l,p=Math.sin(e*u)/l;return this._w=r*d+this._w*p,this._x=n*d+this._x*p,this._y=i*d+this._y*p,this._z=a*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*i,this.y=a[1]*e+a[4]*n+a[7]*i,this.z=a[2]*e+a[5]*n+a[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,a=t.x,r=t.y,o=t.z,c=t.w,l=2*(r*i-o*n),u=2*(o*e-a*i),d=2*(a*n-r*e);return this.x=e+c*l+r*d-o*u,this.y=n+c*u+o*l-a*d,this.z=i+c*d+a*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i,this.y=a[1]*e+a[5]*n+a[9]*i,this.z=a[2]*e+a[6]*n+a[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,a=t.z,r=e.x,o=e.y,c=e.z;return this.x=i*c-a*o,this.y=a*r-n*c,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ws.copy(this).projectOnVector(t),this.sub(ws)}reflect(t){return this.sub(ws.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ws=new L,xr=new Wn;class Fi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ve.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ve.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ve.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ve):Ve.fromBufferAttribute(a,r),Ve.applyMatrix4(t.matrixWorld),this.expandByPoint(Ve);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(t.matrixWorld),this.union(Gi)}const i=t.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ve),Ve.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wi),Hi.subVectors(this.max,wi),Kn.subVectors(t.a,wi),Zn.subVectors(t.b,wi),jn.subVectors(t.c,wi),gn.subVectors(Zn,Kn),_n.subVectors(jn,Zn),Cn.subVectors(Kn,jn);let e=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Cn.z,Cn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Cn.z,0,-Cn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Cn.y,Cn.x,0];return!Ts(e,Kn,Zn,jn,Hi)||(e=[1,0,0,0,1,0,0,0,1],!Ts(e,Kn,Zn,jn,Hi))?!1:(Vi.crossVectors(gn,_n),e=[Vi.x,Vi.y,Vi.z],Ts(e,Kn,Zn,jn,Hi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ve).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ve).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const sn=[new L,new L,new L,new L,new L,new L,new L,new L],Ve=new L,Gi=new Fi,Kn=new L,Zn=new L,jn=new L,gn=new L,_n=new L,Cn=new L,wi=new L,Hi=new L,Vi=new L,Dn=new L;function Ts(s,t,e,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){Dn.fromArray(s,a);const o=i.x*Math.abs(Dn.x)+i.y*Math.abs(Dn.y)+i.z*Math.abs(Dn.z),c=t.dot(Dn),l=e.dot(Dn),u=n.dot(Dn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const el=new Fi,Ti=new L,Es=new L;class Wa{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):el.setFromPoints(t).getCenter(n);let i=0;for(let a=0,r=t.length;a<r;a++)i=Math.max(i,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ti.subVectors(t,this.center);const e=Ti.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ti,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Es.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ti.copy(t.center).add(Es)),this.expandByPoint(Ti.copy(t.center).sub(Es))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new L,bs=new L,Wi=new L,xn=new L,As=new L,Xi=new L,Ps=new L;class nl{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){bs.copy(t).add(e).multiplyScalar(.5),Wi.copy(e).sub(t).normalize(),xn.copy(this.origin).sub(bs);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Wi),o=xn.dot(this.direction),c=-xn.dot(Wi),l=xn.lengthSq(),u=Math.abs(1-r*r);let d,p,m,_;if(u>0)if(d=r*c-o,p=r*o-c,_=a*u,d>=0)if(p>=-_)if(p<=_){const g=1/u;d*=g,p*=g,m=d*(d+r*p+2*o)+p*(r*d+p+2*c)+l}else p=a,d=Math.max(0,-(r*p+o)),m=-d*d+p*(p+2*c)+l;else p=-a,d=Math.max(0,-(r*p+o)),m=-d*d+p*(p+2*c)+l;else p<=-_?(d=Math.max(0,-(-r*a+o)),p=d>0?-a:Math.min(Math.max(-a,-c),a),m=-d*d+p*(p+2*c)+l):p<=_?(d=0,p=Math.min(Math.max(-a,-c),a),m=p*(p+2*c)+l):(d=Math.max(0,-(r*a+o)),p=d>0?a:Math.min(Math.max(-a,-c),a),m=-d*d+p*(p+2*c)+l);else p=r>0?-a:a,d=Math.max(0,-(r*p+o)),m=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(bs).addScaledVector(Wi,p),m}intersectSphere(t,e){an.subVectors(t.center,this.origin);const n=an.dot(this.direction),i=an.dot(an)-n*n,a=t.radius*t.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,a,r,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,i=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,i=(t.min.x-p.x)*l),u>=0?(a=(t.min.y-p.y)*u,r=(t.max.y-p.y)*u):(a=(t.max.y-p.y)*u,r=(t.min.y-p.y)*u),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),d>=0?(o=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,n,i,a){As.subVectors(e,t),Xi.subVectors(n,t),Ps.crossVectors(As,Xi);let r=this.direction.dot(Ps),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;xn.subVectors(this.origin,t);const c=o*this.direction.dot(Xi.crossVectors(xn,Xi));if(c<0)return null;const l=o*this.direction.dot(As.cross(xn));if(l<0||c+l>r)return null;const u=-o*xn.dot(Ps);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,i,a,r,o,c,l,u,d,p,m,_,g,f){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,c,l,u,d,p,m,_,g,f)}set(t,e,n,i,a,r,o,c,l,u,d,p,m,_,g,f){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=i,h[1]=a,h[5]=r,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=p,h[3]=m,h[7]=_,h[11]=g,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/$n.setFromMatrixColumn(t,0).length(),a=1/$n.setFromMatrixColumn(t,1).length(),r=1/$n.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){const p=r*u,m=r*d,_=o*u,g=o*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=m+_*l,e[5]=p-g*l,e[9]=-o*c,e[2]=g-p*l,e[6]=_+m*l,e[10]=r*c}else if(t.order==="YXZ"){const p=c*u,m=c*d,_=l*u,g=l*d;e[0]=p+g*o,e[4]=_*o-m,e[8]=r*l,e[1]=r*d,e[5]=r*u,e[9]=-o,e[2]=m*o-_,e[6]=g+p*o,e[10]=r*c}else if(t.order==="ZXY"){const p=c*u,m=c*d,_=l*u,g=l*d;e[0]=p-g*o,e[4]=-r*d,e[8]=_+m*o,e[1]=m+_*o,e[5]=r*u,e[9]=g-p*o,e[2]=-r*l,e[6]=o,e[10]=r*c}else if(t.order==="ZYX"){const p=r*u,m=r*d,_=o*u,g=o*d;e[0]=c*u,e[4]=_*l-m,e[8]=p*l+g,e[1]=c*d,e[5]=g*l+p,e[9]=m*l-_,e[2]=-l,e[6]=o*c,e[10]=r*c}else if(t.order==="YZX"){const p=r*c,m=r*l,_=o*c,g=o*l;e[0]=c*u,e[4]=g-p*d,e[8]=_*d+m,e[1]=d,e[5]=r*u,e[9]=-o*u,e[2]=-l*u,e[6]=m*d+_,e[10]=p-g*d}else if(t.order==="XZY"){const p=r*c,m=r*l,_=o*c,g=o*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=p*d+g,e[5]=r*u,e[9]=m*d-_,e[2]=_*d-m,e[6]=o*u,e[10]=g*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(il,t,sl)}lookAt(t,e,n){const i=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),vn.crossVectors(n,Ue),vn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),vn.crossVectors(n,Ue)),vn.normalize(),qi.crossVectors(Ue,vn),i[0]=vn.x,i[4]=qi.x,i[8]=Ue.x,i[1]=vn.y,i[5]=qi.y,i[9]=Ue.y,i[2]=vn.z,i[6]=qi.z,i[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],p=n[9],m=n[13],_=n[2],g=n[6],f=n[10],h=n[14],S=n[3],T=n[7],x=n[11],D=n[15],b=i[0],P=i[4],C=i[8],v=i[12],M=i[1],R=i[5],k=i[9],I=i[13],H=i[2],z=i[6],q=i[10],j=i[14],V=i[3],it=i[7],nt=i[11],dt=i[15];return a[0]=r*b+o*M+c*H+l*V,a[4]=r*P+o*R+c*z+l*it,a[8]=r*C+o*k+c*q+l*nt,a[12]=r*v+o*I+c*j+l*dt,a[1]=u*b+d*M+p*H+m*V,a[5]=u*P+d*R+p*z+m*it,a[9]=u*C+d*k+p*q+m*nt,a[13]=u*v+d*I+p*j+m*dt,a[2]=_*b+g*M+f*H+h*V,a[6]=_*P+g*R+f*z+h*it,a[10]=_*C+g*k+f*q+h*nt,a[14]=_*v+g*I+f*j+h*dt,a[3]=S*b+T*M+x*H+D*V,a[7]=S*P+T*R+x*z+D*it,a[11]=S*C+T*k+x*q+D*nt,a[15]=S*v+T*I+x*j+D*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],a=t[12],r=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],p=t[10],m=t[14],_=t[3],g=t[7],f=t[11],h=t[15];return _*(+a*c*d-i*l*d-a*o*p+n*l*p+i*o*m-n*c*m)+g*(+e*c*m-e*l*p+a*r*p-i*r*m+i*l*u-a*c*u)+f*(+e*l*d-e*o*m-a*r*d+n*r*m+a*o*u-n*l*u)+h*(-i*o*u-e*c*d+e*o*p+i*r*d-n*r*p+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],p=t[10],m=t[11],_=t[12],g=t[13],f=t[14],h=t[15],S=d*f*l-g*p*l+g*c*m-o*f*m-d*c*h+o*p*h,T=_*p*l-u*f*l-_*c*m+r*f*m+u*c*h-r*p*h,x=u*g*l-_*d*l+_*o*m-r*g*m-u*o*h+r*d*h,D=_*d*c-u*g*c-_*o*p+r*g*p+u*o*f-r*d*f,b=e*S+n*T+i*x+a*D;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/b;return t[0]=S*P,t[1]=(g*p*a-d*f*a-g*i*m+n*f*m+d*i*h-n*p*h)*P,t[2]=(o*f*a-g*c*a+g*i*l-n*f*l-o*i*h+n*c*h)*P,t[3]=(d*c*a-o*p*a-d*i*l+n*p*l+o*i*m-n*c*m)*P,t[4]=T*P,t[5]=(u*f*a-_*p*a+_*i*m-e*f*m-u*i*h+e*p*h)*P,t[6]=(_*c*a-r*f*a-_*i*l+e*f*l+r*i*h-e*c*h)*P,t[7]=(r*p*a-u*c*a+u*i*l-e*p*l-r*i*m+e*c*m)*P,t[8]=x*P,t[9]=(_*d*a-u*g*a-_*n*m+e*g*m+u*n*h-e*d*h)*P,t[10]=(r*g*a-_*o*a+_*n*l-e*g*l-r*n*h+e*o*h)*P,t[11]=(u*o*a-r*d*a-u*n*l+e*d*l+r*n*m-e*o*m)*P,t[12]=D*P,t[13]=(u*g*i-_*d*i+_*n*p-e*g*p-u*n*f+e*d*f)*P,t[14]=(_*o*i-r*g*i-_*n*c+e*g*c+r*n*f-e*o*f)*P,t[15]=(r*d*i-u*o*i+u*n*c-e*d*c-r*n*p+e*o*p)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,a=t.z;return e[0]*=n,e[4]*=i,e[8]*=a,e[1]*=n,e[5]*=i,e[9]*=a,e[2]*=n,e[6]*=i,e[10]*=a,e[3]*=n,e[7]*=i,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),a=1-n,r=t.x,o=t.y,c=t.z,l=a*r,u=a*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*r,0,l*c-i*o,u*c+i*r,a*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,a,r){return this.set(1,n,a,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,a=e._x,r=e._y,o=e._z,c=e._w,l=a+a,u=r+r,d=o+o,p=a*l,m=a*u,_=a*d,g=r*u,f=r*d,h=o*d,S=c*l,T=c*u,x=c*d,D=n.x,b=n.y,P=n.z;return i[0]=(1-(g+h))*D,i[1]=(m+x)*D,i[2]=(_-T)*D,i[3]=0,i[4]=(m-x)*b,i[5]=(1-(p+h))*b,i[6]=(f+S)*b,i[7]=0,i[8]=(_+T)*P,i[9]=(f-S)*P,i[10]=(1-(p+g))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let a=$n.set(i[0],i[1],i[2]).length();const r=$n.set(i[4],i[5],i[6]).length(),o=$n.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),t.x=i[12],t.y=i[13],t.z=i[14],We.copy(this);const l=1/a,u=1/r,d=1/o;return We.elements[0]*=l,We.elements[1]*=l,We.elements[2]*=l,We.elements[4]*=u,We.elements[5]*=u,We.elements[6]*=u,We.elements[8]*=d,We.elements[9]*=d,We.elements[10]*=d,e.setFromRotationMatrix(We),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,i,a,r,o=un){const c=this.elements,l=2*a/(e-t),u=2*a/(n-i),d=(e+t)/(e-t),p=(n+i)/(n-i);let m,_;if(o===un)m=-(r+a)/(r-a),_=-2*r*a/(r-a);else if(o===ps)m=-r/(r-a),_=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,a,r,o=un){const c=this.elements,l=1/(e-t),u=1/(n-i),d=1/(r-a),p=(e+t)*l,m=(n+i)*u;let _,g;if(o===un)_=(r+a)*d,g=-2*d;else if(o===ps)_=a*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $n=new L,We=new pe,il=new L(0,0,0),sl=new L(1,1,1),vn=new L,qi=new L,Ue=new L,vr=new pe,Mr=new Wn;class tn{constructor(t=0,e=0,n=0,i=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,a=i[0],r=i[4],o=i[8],c=i[1],l=i[5],u=i[9],d=i[2],p=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Re(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Re(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mr.setFromEuler(this),this.setFromQuaternion(Mr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let al=0;const yr=new L,Jn=new Wn,rn=new pe,Yi=new L,Ei=new L,rl=new L,ol=new Wn,Sr=new L(1,0,0),wr=new L(0,1,0),Tr=new L(0,0,1),Er={type:"added"},cl={type:"removed"},Qn={type:"childadded",child:null},Rs={type:"childremoved",child:null};class we extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:al++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new L,e=new tn,n=new Wn,i=new L(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new Xt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.premultiply(Jn),this}rotateX(t){return this.rotateOnAxis(Sr,t)}rotateY(t){return this.rotateOnAxis(wr,t)}rotateZ(t){return this.rotateOnAxis(Tr,t)}translateOnAxis(t,e){return yr.copy(t).applyQuaternion(this.quaternion),this.position.add(yr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sr,t)}translateY(t){return this.translateOnAxis(wr,t)}translateZ(t){return this.translateOnAxis(Tr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yi.copy(t):Yi.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Ei,Yi,this.up):rn.lookAt(Yi,Ei,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),Jn.setFromRotationMatrix(rn),this.quaternion.premultiply(Jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Er),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cl),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Er),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,t,rl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,ol,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];a(t.shapes,d)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(t.materials,this.material[c]));i.material=o}else i.material=a(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(a(t.animations,c))}}if(e){const o=r(t.geometries),c=r(t.materials),l=r(t.textures),u=r(t.images),d=r(t.shapes),p=r(t.skeletons),m=r(t.animations),_=r(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function r(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}we.DEFAULT_UP=new L(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xe=new L,on=new L,Cs=new L,cn=new L,ti=new L,ei=new L,br=new L,Ds=new L,Is=new L,Ls=new L,Us=new le,Ns=new le,Fs=new le;class Ye{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Xe.subVectors(t,e),i.cross(Xe);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(t,e,n,i,a){Xe.subVectors(i,e),on.subVectors(n,e),Cs.subVectors(t,e);const r=Xe.dot(Xe),o=Xe.dot(on),c=Xe.dot(Cs),l=on.dot(on),u=on.dot(Cs),d=r*l-o*o;if(d===0)return a.set(0,0,0),null;const p=1/d,m=(l*c-o*u)*p,_=(r*u-o*c)*p;return a.set(1-m-_,_,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(t,e,n,i,a,r,o,c){return this.getBarycoord(t,e,n,i,cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,cn.x),c.addScaledVector(r,cn.y),c.addScaledVector(o,cn.z),c)}static getInterpolatedAttribute(t,e,n,i,a,r){return Us.setScalar(0),Ns.setScalar(0),Fs.setScalar(0),Us.fromBufferAttribute(t,e),Ns.fromBufferAttribute(t,n),Fs.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Us,a.x),r.addScaledVector(Ns,a.y),r.addScaledVector(Fs,a.z),r}static isFrontFacing(t,e,n,i){return Xe.subVectors(n,e),on.subVectors(t,e),Xe.cross(on).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Xe.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,a){return Ye.getInterpolation(t,this.a,this.b,this.c,e,n,i,a)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,a=this.c;let r,o;ti.subVectors(i,n),ei.subVectors(a,n),Ds.subVectors(t,n);const c=ti.dot(Ds),l=ei.dot(Ds);if(c<=0&&l<=0)return e.copy(n);Is.subVectors(t,i);const u=ti.dot(Is),d=ei.dot(Is);if(u>=0&&d<=u)return e.copy(i);const p=c*d-u*l;if(p<=0&&c>=0&&u<=0)return r=c/(c-u),e.copy(n).addScaledVector(ti,r);Ls.subVectors(t,a);const m=ti.dot(Ls),_=ei.dot(Ls);if(_>=0&&m<=_)return e.copy(a);const g=m*l-c*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(ei,o);const f=u*_-m*d;if(f<=0&&d-u>=0&&m-_>=0)return br.subVectors(a,i),o=(d-u)/(d-u+(m-_)),e.copy(i).addScaledVector(br,o);const h=1/(f+g+p);return r=g*h,o=p*h,e.copy(n).addScaledVector(ti,r).addScaledVector(ei,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ao={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function Os(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=Va(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=Os(r,a,t+1/3),this.g=Os(r,a,t),this.b=Os(r,a,t-1/3)}return te.toWorkingColorSpace(this,i),this}setStyle(t,e=ke){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=Ao[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dn(t.r),this.g=dn(t.g),this.b=dn(t.b),this}copyLinearToSRGB(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return te.fromWorkingColorSpace(be.copy(this),t),Math.round(Re(be.r*255,0,255))*65536+Math.round(Re(be.g*255,0,255))*256+Math.round(Re(be.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(be.copy(this),e);const n=be.r,i=be.g,a=be.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let c,l;const u=(o+r)/2;if(o===r)c=0,l=0;else{const d=r-o;switch(l=u<=.5?d/(r+o):d/(2-r-o),r){case n:c=(i-a)/d+(i<a?6:0);break;case i:c=(a-n)/d+2;break;case a:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=ke){te.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,i=be.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Mn),this.setHSL(Mn.h+t,Mn.s+e,Mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mn),t.getHSL(Ki);const n=Di(Mn.h,Ki.h,e),i=Di(Mn.s,Ki.s,e),a=Di(Mn.l,Ki.l,e);return this.setHSL(n,i,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*i,this.g=a[1]*e+a[4]*n+a[7]*i,this.b=a[2]*e+a[5]*n+a[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new $t;$t.NAMES=Ao;let ll=0;class Oi extends xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ll++}),this.uuid=vi(),this.name="",this.blending=ci,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=js,this.blendDst=$s,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qn,this.stencilZFail=qn,this.stencilZPass=qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==js&&(n.blendSrc=this.blendSrc),this.blendDst!==$s&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(e){const a=i(t.textures),r=i(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wt extends Oi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new L,Zi=new Zt;class Qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lr,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zi.fromBufferAttribute(this,e),Zi.applyMatrix3(t),this.setXY(e,Zi.x,Zi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array),a=Ae(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lr&&(t.usage=this.usage),t}}class Po extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ro extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hl=0;const Be=new pe,Bs=new we,ni=new L,Ne=new Fi,bi=new Fi,Se=new L;class ze extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hl++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wo(t)?Ro:Po)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Xt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return Bs.lookAt(t),Bs.updateMatrix(),this.applyMatrix4(Bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,a=t.length;i<a;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ge(n,3))}else{for(let n=0,i=e.count;n<i;n++){const a=t[n];e.setXYZ(n,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const a=e[n];Ne.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];bi.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(Ne.min,bi.min),Ne.expandByPoint(Se),Se.addVectors(Ne.max,bi.max),Ne.expandByPoint(Se)):(Ne.expandByPoint(bi.min),Ne.expandByPoint(bi.max))}Ne.getCenter(n);let i=0;for(let a=0,r=t.count;a<r;a++)Se.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Se.fromBufferAttribute(o,l),c&&(ni.fromBufferAttribute(t,l),Se.add(ni)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new L,c[C]=new L;const l=new L,u=new L,d=new L,p=new Zt,m=new Zt,_=new Zt,g=new L,f=new L;function h(C,v,M){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,v),d.fromBufferAttribute(n,M),p.fromBufferAttribute(a,C),m.fromBufferAttribute(a,v),_.fromBufferAttribute(a,M),u.sub(l),d.sub(l),m.sub(p),_.sub(p);const R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(R),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(R),o[C].add(g),o[v].add(g),o[M].add(g),c[C].add(f),c[v].add(f),c[M].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let C=0,v=S.length;C<v;++C){const M=S[C],R=M.start,k=M.count;for(let I=R,H=R+k;I<H;I+=3)h(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const T=new L,x=new L,D=new L,b=new L;function P(C){D.fromBufferAttribute(i,C),b.copy(D);const v=o[C];T.copy(v),T.sub(D.multiplyScalar(D.dot(v))).normalize(),x.crossVectors(b,v);const R=x.dot(c[C])<0?-1:1;r.setXYZW(C,T.x,T.y,T.z,R)}for(let C=0,v=S.length;C<v;++C){const M=S[C],R=M.start,k=M.count;for(let I=R,H=R+k;I<H;I+=3)P(t.getX(I+0)),P(t.getX(I+1)),P(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const i=new L,a=new L,r=new L,o=new L,c=new L,l=new L,u=new L,d=new L;if(t)for(let p=0,m=t.count;p<m;p+=3){const _=t.getX(p+0),g=t.getX(p+1),f=t.getX(p+2);i.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),r.fromBufferAttribute(e,f),u.subVectors(r,a),d.subVectors(i,a),u.cross(d),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let p=0,m=e.count;p<m;p+=3)i.fromBufferAttribute(e,p+0),a.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),u.subVectors(r,a),d.subVectors(i,a),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,d=o.normalized,p=new l.constructor(c.length*u);let m=0,_=0;for(let g=0,f=c.length;g<f;g++){o.isInterleavedBufferAttribute?m=c[g]*o.data.stride+o.offset:m=c[g]*u;for(let h=0;h<u;h++)p[_++]=l[m++]}return new Qe(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,d=l.length;u<d;u++){const p=l[u],m=t(p,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,p=l.length;d<p;d++){const m=l[d];u.push(m.toJSON(t.data))}u.length>0&&(i[c]=u,a=!0)}a&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const a=t.morphAttributes;for(const l in a){const u=[],d=a[l];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,u=r.length;l<u;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ar=new pe,In=new nl,ji=new Wa,Pr=new L,$i=new L,Ji=new L,Qi=new L,ks=new L,ts=new L,Rr=new L,es=new L;class E extends we{constructor(t=new ze,e=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(a&&o){ts.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],d=a[c];u!==0&&(ks.fromBufferAttribute(d,t),r?ts.addScaledVector(ks,u):ts.addScaledVector(ks.sub(e),u))}e.add(ts)}return e}raycast(t,e){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(a),In.copy(t.ray).recast(t.near),!(ji.containsPoint(In.origin)===!1&&(In.intersectSphere(ji,Pr)===null||In.origin.distanceToSquared(Pr)>(t.far-t.near)**2))&&(Ar.copy(a).invert(),In.copy(t.ray).applyMatrix4(Ar),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,In)))}_computeIntersections(t,e,n){let i;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,p=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,g=p.length;_<g;_++){const f=p[_],h=r[f.materialIndex],S=Math.max(f.start,m.start),T=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let x=S,D=T;x<D;x+=3){const b=o.getX(x),P=o.getX(x+1),C=o.getX(x+2);i=ns(this,h,t,n,l,u,d,b,P,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let f=_,h=g;f<h;f+=3){const S=o.getX(f),T=o.getX(f+1),x=o.getX(f+2);i=ns(this,r,t,n,l,u,d,S,T,x),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let _=0,g=p.length;_<g;_++){const f=p[_],h=r[f.materialIndex],S=Math.max(f.start,m.start),T=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let x=S,D=T;x<D;x+=3){const b=x,P=x+1,C=x+2;i=ns(this,h,t,n,l,u,d,b,P,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(c.count,m.start+m.count);for(let f=_,h=g;f<h;f+=3){const S=f,T=f+1,x=f+2;i=ns(this,r,t,n,l,u,d,S,T,x),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function ul(s,t,e,n,i,a,r,o){let c;if(t.side===Ie?c=n.intersectTriangle(r,a,i,!0,o):c=n.intersectTriangle(i,a,r,t.side===An,o),c===null)return null;es.copy(o),es.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(es);return l<e.near||l>e.far?null:{distance:l,point:es.clone(),object:s}}function ns(s,t,e,n,i,a,r,o,c,l){s.getVertexPosition(o,$i),s.getVertexPosition(c,Ji),s.getVertexPosition(l,Qi);const u=ul(s,t,e,n,$i,Ji,Qi,Rr);if(u){const d=new L;Ye.getBarycoord(Rr,$i,Ji,Qi,d),i&&(u.uv=Ye.getInterpolatedAttribute(i,o,c,l,d,new Zt)),a&&(u.uv1=Ye.getInterpolatedAttribute(a,o,c,l,d,new Zt)),r&&(u.normal=Ye.getInterpolatedAttribute(r,o,c,l,d,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new L,materialIndex:0};Ye.getNormal($i,Ji,Qi,p.normal),u.face=p,u.barycoord=d}return u}class et extends ze{constructor(t=1,e=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],u=[],d=[];let p=0,m=0;_("z","y","x",-1,-1,n,e,t,r,a,0),_("z","y","x",1,-1,n,e,-t,r,a,1),_("x","z","y",1,1,t,n,e,i,r,2),_("x","z","y",1,-1,t,n,-e,i,r,3),_("x","y","z",1,-1,t,e,n,i,a,4),_("x","y","z",-1,-1,t,e,-n,i,a,5),this.setIndex(c),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(d,2));function _(g,f,h,S,T,x,D,b,P,C,v){const M=x/P,R=D/C,k=x/2,I=D/2,H=b/2,z=P+1,q=C+1;let j=0,V=0;const it=new L;for(let nt=0;nt<q;nt++){const dt=nt*R-I;for(let Ut=0;Ut<z;Ut++){const lt=Ut*M-k;it[g]=lt*S,it[f]=dt*T,it[h]=H,l.push(it.x,it.y,it.z),it[g]=0,it[f]=0,it[h]=b>0?1:-1,u.push(it.x,it.y,it.z),d.push(Ut/P),d.push(1-nt/C),j+=1}}for(let nt=0;nt<C;nt++)for(let dt=0;dt<P;dt++){const Ut=p+dt+z*nt,lt=p+dt+z*(nt+1),B=p+(dt+1)+z*(nt+1),Y=p+(dt+1)+z*nt;c.push(Ut,lt,Y),c.push(lt,B,Y),V+=6}o.addGroup(m,V,v),m+=V,p+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new et(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Pe(s){const t={};for(let e=0;e<s.length;e++){const n=gi(s[e]);for(const i in n)t[i]=n[i]}return t}function dl(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Co(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const fl={clone:gi,merge:Pe};var pl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ml=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends Oi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pl,this.fragmentShader=ml,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gi(t.uniforms),this.uniformsGroups=dl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Do extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yn=new L,Cr=new Zt,Dr=new Zt;class Fe extends Do{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Li*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ci*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Li*2*Math.atan(Math.tan(Ci*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yn.x,yn.y).multiplyScalar(-t/yn.z),yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yn.x,yn.y).multiplyScalar(-t/yn.z)}getViewSize(t,e){return this.getViewBounds(t,Cr,Dr),e.subVectors(Dr,Cr)}setViewOffset(t,e,n,i,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ci*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ii=-90,si=1;class gl extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fe(ii,si,t,e);i.layers=this.layers,this.add(i);const a=new Fe(ii,si,t,e);a.layers=this.layers,this.add(a);const r=new Fe(ii,si,t,e);r.layers=this.layers,this.add(r);const o=new Fe(ii,si,t,e);o.layers=this.layers,this.add(o);const c=new Fe(ii,si,t,e);c.layers=this.layers,this.add(c);const l=new Fe(ii,si,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,a,r,o,c]=e;for(const l of e)this.remove(l);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,u]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,a),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(d,p,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Io extends Ce{constructor(t,e,n,i,a,r,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:di,super(t,e,n,i,a,r,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _l extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Io(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new et(5,5,5),a=new Pn({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:En});a.uniforms.tEquirect.value=e;const r=new E(i,a),o=e.minFilter;return e.minFilter===Gn&&(e.minFilter=Je),new gl(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(a)}}const zs=new L,xl=new L,vl=new Xt;class Fn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=zs.subVectors(n,e).cross(xl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(zs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vl.getNormalMatrix(t),i=this.coplanarPoint(zs).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ln=new Wa,is=new L;class Xa{constructor(t=new Fn,e=new Fn,n=new Fn,i=new Fn,a=new Fn,r=new Fn){this.planes=[t,e,n,i,a,r]}set(t,e,n,i,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un){const n=this.planes,i=t.elements,a=i[0],r=i[1],o=i[2],c=i[3],l=i[4],u=i[5],d=i[6],p=i[7],m=i[8],_=i[9],g=i[10],f=i[11],h=i[12],S=i[13],T=i[14],x=i[15];if(n[0].setComponents(c-a,p-l,f-m,x-h).normalize(),n[1].setComponents(c+a,p+l,f+m,x+h).normalize(),n[2].setComponents(c+r,p+u,f+_,x+S).normalize(),n[3].setComponents(c-r,p-u,f-_,x-S).normalize(),n[4].setComponents(c-o,p-d,f-g,x-T).normalize(),e===un)n[5].setComponents(c+o,p+d,f+g,x+T).normalize();else if(e===ps)n[5].setComponents(o,d,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(t){return Ln.center.set(0,0,0),Ln.radius=.7071067811865476,Ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(is.x=i.normal.x>0?t.max.x:t.min.x,is.y=i.normal.y>0?t.max.y:t.min.y,is.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(is)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lo(){let s=null,t=!1,e=null,n=null;function i(a,r){e(a,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function Ml(s){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,d=l.byteLength,p=s.createBuffer();s.bindBuffer(c,p),s.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=s.SHORT;else if(l instanceof Uint32Array)m=s.UNSIGNED_INT;else if(l instanceof Int32Array)m=s.INT;else if(l instanceof Int8Array)m=s.BYTE;else if(l instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const u=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,u);else{d.sort((m,_)=>m.start-_.start);let p=0;for(let m=1;m<d.length;m++){const _=d[p],g=d[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++p,d[p]=g)}d.length=p+1;for(let m=0,_=d.length;m<_;m++){const g=d[m];s.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:a,update:r}}class ae extends ze{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const a=t/2,r=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,d=t/o,p=e/c,m=[],_=[],g=[],f=[];for(let h=0;h<u;h++){const S=h*p-r;for(let T=0;T<l;T++){const x=T*d-a;_.push(x,-S,0),g.push(0,0,1),f.push(T/o),f.push(1-h/c)}}for(let h=0;h<c;h++)for(let S=0;S<o;S++){const T=S+l*h,x=S+l*(h+1),D=S+1+l*(h+1),b=S+1+l*h;m.push(T,x,b),m.push(x,D,b)}this.setIndex(m),this.setAttribute("position",new ge(_,3)),this.setAttribute("normal",new ge(g,3)),this.setAttribute("uv",new ge(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.width,t.height,t.widthSegments,t.heightSegments)}}var yl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sl=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,El=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Al=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rl=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Il=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ll=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ul=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ol=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ql=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$l="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ql=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,th=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ih=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ah=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ch=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ph=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_h=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Th=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ah=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ph=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ch=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ih=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Oh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$h=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,iu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,su=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,au=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ru=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ou=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,du=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Au=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ru=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Du=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ou=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ku=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ku=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ju=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$u=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ju=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:yl,alphahash_pars_fragment:Sl,alphamap_fragment:wl,alphamap_pars_fragment:Tl,alphatest_fragment:El,alphatest_pars_fragment:bl,aomap_fragment:Al,aomap_pars_fragment:Pl,batching_pars_vertex:Rl,batching_vertex:Cl,begin_vertex:Dl,beginnormal_vertex:Il,bsdfs:Ll,iridescence_fragment:Ul,bumpmap_pars_fragment:Nl,clipping_planes_fragment:Fl,clipping_planes_pars_fragment:Ol,clipping_planes_pars_vertex:Bl,clipping_planes_vertex:kl,color_fragment:zl,color_pars_fragment:Gl,color_pars_vertex:Hl,color_vertex:Vl,common:Wl,cube_uv_reflection_fragment:Xl,defaultnormal_vertex:ql,displacementmap_pars_vertex:Yl,displacementmap_vertex:Kl,emissivemap_fragment:Zl,emissivemap_pars_fragment:jl,colorspace_fragment:$l,colorspace_pars_fragment:Jl,envmap_fragment:Ql,envmap_common_pars_fragment:th,envmap_pars_fragment:eh,envmap_pars_vertex:nh,envmap_physical_pars_fragment:fh,envmap_vertex:ih,fog_vertex:sh,fog_pars_vertex:ah,fog_fragment:rh,fog_pars_fragment:oh,gradientmap_pars_fragment:ch,lightmap_pars_fragment:lh,lights_lambert_fragment:hh,lights_lambert_pars_fragment:uh,lights_pars_begin:dh,lights_toon_fragment:ph,lights_toon_pars_fragment:mh,lights_phong_fragment:gh,lights_phong_pars_fragment:_h,lights_physical_fragment:xh,lights_physical_pars_fragment:vh,lights_fragment_begin:Mh,lights_fragment_maps:yh,lights_fragment_end:Sh,logdepthbuf_fragment:wh,logdepthbuf_pars_fragment:Th,logdepthbuf_pars_vertex:Eh,logdepthbuf_vertex:bh,map_fragment:Ah,map_pars_fragment:Ph,map_particle_fragment:Rh,map_particle_pars_fragment:Ch,metalnessmap_fragment:Dh,metalnessmap_pars_fragment:Ih,morphinstance_vertex:Lh,morphcolor_vertex:Uh,morphnormal_vertex:Nh,morphtarget_pars_vertex:Fh,morphtarget_vertex:Oh,normal_fragment_begin:Bh,normal_fragment_maps:kh,normal_pars_fragment:zh,normal_pars_vertex:Gh,normal_vertex:Hh,normalmap_pars_fragment:Vh,clearcoat_normal_fragment_begin:Wh,clearcoat_normal_fragment_maps:Xh,clearcoat_pars_fragment:qh,iridescence_pars_fragment:Yh,opaque_fragment:Kh,packing:Zh,premultiplied_alpha_fragment:jh,project_vertex:$h,dithering_fragment:Jh,dithering_pars_fragment:Qh,roughnessmap_fragment:tu,roughnessmap_pars_fragment:eu,shadowmap_pars_fragment:nu,shadowmap_pars_vertex:iu,shadowmap_vertex:su,shadowmask_pars_fragment:au,skinbase_vertex:ru,skinning_pars_vertex:ou,skinning_vertex:cu,skinnormal_vertex:lu,specularmap_fragment:hu,specularmap_pars_fragment:uu,tonemapping_fragment:du,tonemapping_pars_fragment:fu,transmission_fragment:pu,transmission_pars_fragment:mu,uv_pars_fragment:gu,uv_pars_vertex:_u,uv_vertex:xu,worldpos_vertex:vu,background_vert:Mu,background_frag:yu,backgroundCube_vert:Su,backgroundCube_frag:wu,cube_vert:Tu,cube_frag:Eu,depth_vert:bu,depth_frag:Au,distanceRGBA_vert:Pu,distanceRGBA_frag:Ru,equirect_vert:Cu,equirect_frag:Du,linedashed_vert:Iu,linedashed_frag:Lu,meshbasic_vert:Uu,meshbasic_frag:Nu,meshlambert_vert:Fu,meshlambert_frag:Ou,meshmatcap_vert:Bu,meshmatcap_frag:ku,meshnormal_vert:zu,meshnormal_frag:Gu,meshphong_vert:Hu,meshphong_frag:Vu,meshphysical_vert:Wu,meshphysical_frag:Xu,meshtoon_vert:qu,meshtoon_frag:Yu,points_vert:Ku,points_frag:Zu,shadow_vert:ju,shadow_frag:$u,sprite_vert:Ju,sprite_frag:Qu},ft={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},$e={basic:{uniforms:Pe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Pe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new $t(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Pe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Pe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Pe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new $t(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Pe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Pe([ft.points,ft.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Pe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Pe([ft.common,ft.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Pe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Pe([ft.sprite,ft.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Pe([ft.common,ft.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Pe([ft.lights,ft.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};$e.physical={uniforms:Pe([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const ss={r:0,b:0,g:0},Un=new tn,td=new pe;function ed(s,t,e,n,i,a,r){const o=new $t(0);let c=a===!0?0:1,l,u,d=null,p=0,m=null;function _(S){let T=S.isScene===!0?S.background:null;return T&&T.isTexture&&(T=(S.backgroundBlurriness>0?e:t).get(T)),T}function g(S){let T=!1;const x=_(S);x===null?h(o,c):x&&x.isColor&&(h(x,1),T=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function f(S,T){const x=_(T);x&&(x.isCubeTexture||x.mapping===gs)?(u===void 0&&(u=new E(new et(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:gi($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Un.copy(T.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(td.makeRotationFromEuler(Un)),u.material.toneMapped=te.getTransfer(x.colorSpace)!==ce,(d!==x||p!==x.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,d=x,p=x.version,m=s.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new E(new ae(2,2),new Pn({name:"BackgroundMaterial",uniforms:gi($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=te.getTransfer(x.colorSpace)!==ce,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||p!==x.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,d=x,p=x.version,m=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function h(S,T){S.getRGB(ss,Co(s)),n.buffers.color.setClear(ss.r,ss.g,ss.b,T,r)}return{getClearColor:function(){return o},setClearColor:function(S,T=1){o.set(S),c=T,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,h(o,c)},render:g,addToRenderList:f}}function nd(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=p(null);let a=i,r=!1;function o(M,R,k,I,H){let z=!1;const q=d(I,k,R);a!==q&&(a=q,l(a.object)),z=m(M,I,k,H),z&&_(M,I,k,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(z||r)&&(r=!1,x(M,R,k,I),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function d(M,R,k){const I=k.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let z=H[R.id];z===void 0&&(z={},H[R.id]=z);let q=z[I];return q===void 0&&(q=p(c()),z[I]=q),q}function p(M){const R=[],k=[],I=[];for(let H=0;H<e;H++)R[H]=0,k[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:I,object:M,attributes:{},index:null}}function m(M,R,k,I){const H=a.attributes,z=R.attributes;let q=0;const j=k.getAttributes();for(const V in j)if(j[V].location>=0){const nt=H[V];let dt=z[V];if(dt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor)),nt===void 0||nt.attribute!==dt||dt&&nt.data!==dt.data)return!0;q++}return a.attributesNum!==q||a.index!==I}function _(M,R,k,I){const H={},z=R.attributes;let q=0;const j=k.getAttributes();for(const V in j)if(j[V].location>=0){let nt=z[V];nt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor));const dt={};dt.attribute=nt,nt&&nt.data&&(dt.data=nt.data),H[V]=dt,q++}a.attributes=H,a.attributesNum=q,a.index=I}function g(){const M=a.newAttributes;for(let R=0,k=M.length;R<k;R++)M[R]=0}function f(M){h(M,0)}function h(M,R){const k=a.newAttributes,I=a.enabledAttributes,H=a.attributeDivisors;k[M]=1,I[M]===0&&(s.enableVertexAttribArray(M),I[M]=1),H[M]!==R&&(s.vertexAttribDivisor(M,R),H[M]=R)}function S(){const M=a.newAttributes,R=a.enabledAttributes;for(let k=0,I=R.length;k<I;k++)R[k]!==M[k]&&(s.disableVertexAttribArray(k),R[k]=0)}function T(M,R,k,I,H,z,q){q===!0?s.vertexAttribIPointer(M,R,k,H,z):s.vertexAttribPointer(M,R,k,I,H,z)}function x(M,R,k,I){g();const H=I.attributes,z=k.getAttributes(),q=R.defaultAttributeValues;for(const j in z){const V=z[j];if(V.location>=0){let it=H[j];if(it===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){const nt=it.normalized,dt=it.itemSize,Ut=t.get(it);if(Ut===void 0)continue;const lt=Ut.buffer,B=Ut.type,Y=Ut.bytesPerElement,ut=B===s.INT||B===s.UNSIGNED_INT||it.gpuType===Oa;if(it.isInterleavedBufferAttribute){const rt=it.data,At=rt.stride,ht=it.offset;if(rt.isInstancedInterleavedBuffer){for(let st=0;st<V.locationSize;st++)h(V.location+st,rt.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let st=0;st<V.locationSize;st++)f(V.location+st);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let st=0;st<V.locationSize;st++)T(V.location+st,dt/V.locationSize,B,nt,At*Y,(ht+dt/V.locationSize*st)*Y,ut)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)h(V.location+rt,it.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<V.locationSize;rt++)f(V.location+rt);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let rt=0;rt<V.locationSize;rt++)T(V.location+rt,dt/V.locationSize,B,nt,dt*Y,dt/V.locationSize*rt*Y,ut)}}else if(q!==void 0){const nt=q[j];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(V.location,nt);break;case 3:s.vertexAttrib3fv(V.location,nt);break;case 4:s.vertexAttrib4fv(V.location,nt);break;default:s.vertexAttrib1fv(V.location,nt)}}}}S()}function D(){C();for(const M in n){const R=n[M];for(const k in R){const I=R[k];for(const H in I)u(I[H].object),delete I[H];delete R[k]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const k in R){const I=R[k];for(const H in I)u(I[H].object),delete I[H];delete R[k]}delete n[M.id]}function P(M){for(const R in n){const k=n[R];if(k[M.id]===void 0)continue;const I=k[M.id];for(const H in I)u(I[H].object),delete I[H];delete k[M.id]}}function C(){v(),r=!0,a!==i&&(a=i,l(a.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:v,dispose:D,releaseStatesOfGeometry:b,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:f,disableUnusedAttributes:S}}function id(s,t,e){let n;function i(l){n=l}function a(l,u){s.drawArrays(n,l,u),e.update(u,n,1)}function r(l,u,d){d!==0&&(s.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function o(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_];e.update(m,n,1)}function c(l,u,d,p){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)r(l[_],u[_],p[_]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,p,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g]*p[g];e.update(_,n,1)}}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function sd(s,t,e,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(P){return!(P!==Ke&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const C=P===Ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==fn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==hn&&!C)}function c(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),h=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:D,maxSamples:b}}function ad(s){const t=this;let e=null,n=0,i=!1,a=!1;const r=new Fn,o=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||n!==0||i;return i=p,n=d.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,p){e=u(d,p,0)},this.setState=function(d,p,m){const _=d.clippingPlanes,g=d.clipIntersection,f=d.clipShadows,h=s.get(d);if(!i||_===null||_.length===0||a&&!f)a?u(null):l();else{const S=a?0:n,T=S*4;let x=h.clippingState||null;c.value=x,x=u(_,p,T,m);for(let D=0;D!==T;++D)x[D]=e[D];h.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,p,m,_){const g=d!==null?d.length:0;let f=null;if(g!==0){if(f=c.value,_!==!0||f===null){const h=m+g*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<h)&&(f=new Float32Array(h));for(let T=0,x=m;T!==g;++T,x+=4)r.copy(d[T]).applyMatrix4(S,o),r.normal.toArray(f,x),f[x+3]=r.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}function rd(s){let t=new WeakMap;function e(r,o){return o===aa?r.mapping=di:o===ra&&(r.mapping=fi),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===aa||o===ra)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new _l(c.height);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class Uo extends Do{constructor(t=-1,e=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const oi=4,Ir=[.125,.215,.35,.446,.526,.582],kn=20,Gs=new Uo,Lr=new $t;let Hs=null,Vs=0,Ws=0,Xs=!1;const On=(1+Math.sqrt(5))/2,ai=1/On,Ur=[new L(-On,ai,0),new L(On,ai,0),new L(-ai,0,On),new L(ai,0,On),new L(0,On,-ai),new L(0,On,ai),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Nr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Hs=this._renderer.getRenderTarget(),Vs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,i,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Br(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Or(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hs,Vs,Ws),this._renderer.xr.enabled=Xs,t.scissorTest=!1,as(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===di||t.mapping===fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hs=this._renderer.getRenderTarget(),Vs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Ni,format:Ke,colorSpace:_i,depthBuffer:!1},i=Fr(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fr(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=od(a)),this._blurMaterial=cd(a,t,e)}return i}_compileMaterial(t){const e=new E(this._lodPlanes[0],t);this._renderer.compile(e,Gs)}_sceneToCubeUV(t,e,n,i){const o=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Lr),u.toneMapping=bn,u.autoClear=!1;const m=new Wt({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),_=new E(new et,m);let g=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,g=!0):(m.color.copy(Lr),g=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):S===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const T=this._cubeSize;as(i,S*T,h>2?T:0,T,T),u.setRenderTarget(i),g&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===di||t.mapping===fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Br()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Or());const a=i?this._cubemapMaterial:this._equirectMaterial,r=new E(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const c=this._cubeSize;as(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Gs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Ur[(i-a-1)%Ur.length];this._blur(t,a-1,a,r,o)}e.autoClear=n}_blur(t,e,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",a),this._halfBlur(r,t,n,n,i,"longitudinal",a)}_halfBlur(t,e,n,i,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new E(this._lodPlanes[i],l),p=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*kn-1),g=a/_,f=isFinite(a)?1+Math.floor(u*g):kn;f>kn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${kn}`);const h=[];let S=0;for(let P=0;P<kn;++P){const C=P/g,v=Math.exp(-C*C/2);h.push(v),P===0?S+=v:P<f&&(S+=2*v)}for(let P=0;P<h.length;P++)h[P]=h[P]/S;p.envMap.value=t.texture,p.samples.value=f,p.weights.value=h,p.latitudinal.value=r==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:T}=this;p.dTheta.value=_,p.mipInt.value=T-n;const x=this._sizeLods[i],D=3*x*(i>T-oi?i-T+oi:0),b=4*(this._cubeSize-x);as(e,D,b,3*x,2*x),c.setRenderTarget(e),c.render(d,Gs)}}function od(s){const t=[],e=[],n=[];let i=s;const a=s-oi+1+Ir.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);e.push(o);let c=1/o;r>s-oi?c=Ir[r-s+oi-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,d=1+l,p=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,g=3,f=2,h=1,S=new Float32Array(g*_*m),T=new Float32Array(f*_*m),x=new Float32Array(h*_*m);for(let b=0;b<m;b++){const P=b%3*2/3-1,C=b>2?0:-1,v=[P,C,0,P+2/3,C,0,P+2/3,C+1,0,P,C,0,P+2/3,C+1,0,P,C+1,0];S.set(v,g*_*b),T.set(p,f*_*b);const M=[b,b,b,b,b,b];x.set(M,h*_*b)}const D=new ze;D.setAttribute("position",new Qe(S,g)),D.setAttribute("uv",new Qe(T,f)),D.setAttribute("faceIndex",new Qe(x,h)),t.push(D),i>oi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fr(s,t,e){const n=new Vn(s,t,e);return n.texture.mapping=gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function as(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function cd(s,t,e){const n=new Float32Array(kn),i=new L(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Or(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Br(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function qa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ld(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===aa||c===ra,u=c===di||c===fi;if(l||u){let d=t.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new Nr(s)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&i(m)?(e===null&&(e=new Nr(s)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function hd(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Pi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ud(s,t,e,n){const i={},a=new WeakMap;function r(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);for(const _ in p.morphAttributes){const g=p.morphAttributes[_];for(let f=0,h=g.length;f<h;f++)t.remove(g[f])}p.removeEventListener("dispose",r),delete i[p.id];const m=a.get(p);m&&(t.remove(m),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return i[p.id]===!0||(p.addEventListener("dispose",r),i[p.id]=!0,e.memory.geometries++),p}function c(d){const p=d.attributes;for(const _ in p)t.update(p[_],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const g=m[_];for(let f=0,h=g.length;f<h;f++)t.update(g[f],s.ARRAY_BUFFER)}}function l(d){const p=[],m=d.index,_=d.attributes.position;let g=0;if(m!==null){const S=m.array;g=m.version;for(let T=0,x=S.length;T<x;T+=3){const D=S[T+0],b=S[T+1],P=S[T+2];p.push(D,b,b,P,P,D)}}else if(_!==void 0){const S=_.array;g=_.version;for(let T=0,x=S.length/3-1;T<x;T+=3){const D=T+0,b=T+1,P=T+2;p.push(D,b,b,P,P,D)}}else return;const f=new(wo(p)?Ro:Po)(p,1);f.version=g;const h=a.get(d);h&&t.remove(h),a.set(d,f)}function u(d){const p=a.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&l(d)}else l(d);return a.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function dd(s,t,e){let n;function i(p){n=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function c(p,m){s.drawElements(n,m,a,p*r),e.update(m,n,1)}function l(p,m,_){_!==0&&(s.drawElementsInstanced(n,m,a,p*r,_),e.update(m,n,_))}function u(p,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,p,0,_);let f=0;for(let h=0;h<_;h++)f+=m[h];e.update(f,n,1)}function d(p,m,_,g){if(_===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<p.length;h++)l(p[h]/r,m[h],g[h]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,a,p,0,g,0,_);let h=0;for(let S=0;S<_;S++)h+=m[S]*g[S];e.update(h,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function fd(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function pd(s,t,e){const n=new WeakMap,i=new le;function a(r,o,c){const l=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let p=n.get(o);if(p===void 0||p.count!==d){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var m=M;p!==void 0&&p.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),f===!0&&(x=3);let D=o.attributes.position.count*x,b=1;D>t.maxTextureSize&&(b=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const P=new Float32Array(D*b*4*d),C=new Eo(P,D,b,d);C.type=hn,C.needsUpdate=!0;const v=x*4;for(let R=0;R<d;R++){const k=h[R],I=S[R],H=T[R],z=D*b*4*R;for(let q=0;q<k.count;q++){const j=q*v;_===!0&&(i.fromBufferAttribute(k,q),P[z+j+0]=i.x,P[z+j+1]=i.y,P[z+j+2]=i.z,P[z+j+3]=0),g===!0&&(i.fromBufferAttribute(I,q),P[z+j+4]=i.x,P[z+j+5]=i.y,P[z+j+6]=i.z,P[z+j+7]=0),f===!0&&(i.fromBufferAttribute(H,q),P[z+j+8]=i.x,P[z+j+9]=i.y,P[z+j+10]=i.z,P[z+j+11]=H.itemSize===4?i.w:1)}}p={count:d,texture:C,size:new Zt(D,b)},n.set(o,p),o.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let _=0;for(let f=0;f<l.length;f++)_+=l[f];const g=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:a}}function md(s,t,e,n){let i=new WeakMap;function a(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;i.get(p)!==l&&(p.update(),i.set(p,l))}return d}function r(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:r}}class No extends Ce{constructor(t,e,n,i,a,r,o,c,l,u=li){if(u!==li&&u!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===li&&(n=Hn),n===void 0&&u===mi&&(n=pi),super(null,i,a,r,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ze,this.minFilter=c!==void 0?c:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Fo=new Ce,kr=new No(1,1),Oo=new Eo,Bo=new tl,ko=new Io,zr=[],Gr=[],Hr=new Float32Array(16),Vr=new Float32Array(9),Wr=new Float32Array(4);function Mi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let a=zr[i];if(a===void 0&&(a=new Float32Array(i),zr[i]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function Me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function xs(s,t){let e=Gr[t];e===void 0&&(e=new Int32Array(t),Gr[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function gd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function _d(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2fv(this.addr,t),ye(e,t)}}function xd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;s.uniform3fv(this.addr,t),ye(e,t)}}function vd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4fv(this.addr,t),ye(e,t)}}function Md(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;Wr.set(n),s.uniformMatrix2fv(this.addr,!1,Wr),ye(e,n)}}function yd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;Vr.set(n),s.uniformMatrix3fv(this.addr,!1,Vr),ye(e,n)}}function Sd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;Hr.set(n),s.uniformMatrix4fv(this.addr,!1,Hr),ye(e,n)}}function wd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Td(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2iv(this.addr,t),ye(e,t)}}function Ed(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;s.uniform3iv(this.addr,t),ye(e,t)}}function bd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4iv(this.addr,t),ye(e,t)}}function Ad(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Pd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2uiv(this.addr,t),ye(e,t)}}function Rd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;s.uniform3uiv(this.addr,t),ye(e,t)}}function Cd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4uiv(this.addr,t),ye(e,t)}}function Dd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(kr.compareFunction=So,a=kr):a=Fo,e.setTexture2D(t||a,i)}function Id(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Bo,i)}function Ld(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ko,i)}function Ud(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Oo,i)}function Nd(s){switch(s){case 5126:return gd;case 35664:return _d;case 35665:return xd;case 35666:return vd;case 35674:return Md;case 35675:return yd;case 35676:return Sd;case 5124:case 35670:return wd;case 35667:case 35671:return Td;case 35668:case 35672:return Ed;case 35669:case 35673:return bd;case 5125:return Ad;case 36294:return Pd;case 36295:return Rd;case 36296:return Cd;case 35678:case 36198:case 36298:case 36306:case 35682:return Dd;case 35679:case 36299:case 36307:return Id;case 35680:case 36300:case 36308:case 36293:return Ld;case 36289:case 36303:case 36311:case 36292:return Ud}}function Fd(s,t){s.uniform1fv(this.addr,t)}function Od(s,t){const e=Mi(t,this.size,2);s.uniform2fv(this.addr,e)}function Bd(s,t){const e=Mi(t,this.size,3);s.uniform3fv(this.addr,e)}function kd(s,t){const e=Mi(t,this.size,4);s.uniform4fv(this.addr,e)}function zd(s,t){const e=Mi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Gd(s,t){const e=Mi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Hd(s,t){const e=Mi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Vd(s,t){s.uniform1iv(this.addr,t)}function Wd(s,t){s.uniform2iv(this.addr,t)}function Xd(s,t){s.uniform3iv(this.addr,t)}function qd(s,t){s.uniform4iv(this.addr,t)}function Yd(s,t){s.uniform1uiv(this.addr,t)}function Kd(s,t){s.uniform2uiv(this.addr,t)}function Zd(s,t){s.uniform3uiv(this.addr,t)}function jd(s,t){s.uniform4uiv(this.addr,t)}function $d(s,t,e){const n=this.cache,i=t.length,a=xs(e,i);Me(n,a)||(s.uniform1iv(this.addr,a),ye(n,a));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Fo,a[r])}function Jd(s,t,e){const n=this.cache,i=t.length,a=xs(e,i);Me(n,a)||(s.uniform1iv(this.addr,a),ye(n,a));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Bo,a[r])}function Qd(s,t,e){const n=this.cache,i=t.length,a=xs(e,i);Me(n,a)||(s.uniform1iv(this.addr,a),ye(n,a));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||ko,a[r])}function tf(s,t,e){const n=this.cache,i=t.length,a=xs(e,i);Me(n,a)||(s.uniform1iv(this.addr,a),ye(n,a));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Oo,a[r])}function ef(s){switch(s){case 5126:return Fd;case 35664:return Od;case 35665:return Bd;case 35666:return kd;case 35674:return zd;case 35675:return Gd;case 35676:return Hd;case 5124:case 35670:return Vd;case 35667:case 35671:return Wd;case 35668:case 35672:return Xd;case 35669:case 35673:return qd;case 5125:return Yd;case 36294:return Kd;case 36295:return Zd;case 36296:return jd;case 35678:case 36198:case 36298:case 36306:case 35682:return $d;case 35679:case 36299:case 36307:return Jd;case 35680:case 36300:case 36308:case 36293:return Qd;case 36289:case 36303:case 36311:case 36292:return tf}}class nf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Nd(e.type)}}class sf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ef(e.type)}}class af{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(t,e[o.id],n)}}}const qs=/(\w+)(\])?(\[|\.)?/g;function Xr(s,t){s.seq.push(t),s.map[t.id]=t}function rf(s,t,e){const n=s.name,i=n.length;for(qs.lastIndex=0;;){const a=qs.exec(n),r=qs.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){Xr(e,l===void 0?new nf(o,s,t):new sf(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new af(o),Xr(e,d)),e=d}}}class fs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=t.getActiveUniform(e,i),r=t.getUniformLocation(e,a.name);rf(a,r,this)}}setValue(t,e,n,i){const a=this.map[e];a!==void 0&&a.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let a=0,r=e.length;a!==r;++a){const o=e[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,a=t.length;i!==a;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function qr(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const of=37297;let cf=0;function lf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const Yr=new Xt;function hf(s){te._getMatrix(Yr,te.workingColorSpace,s);const t=`mat3( ${Yr.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case _s:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Kr(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+i+`

`+lf(s.getShaderSource(t),r)}else return i}function uf(s,t){const e=hf(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function df(s,t){let e;switch(t){case dc:e="Linear";break;case fc:e="Reinhard";break;case pc:e="Cineon";break;case mc:e="ACESFilmic";break;case _c:e="AgX";break;case xc:e="Neutral";break;case gc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const rs=new L;function ff(){te.getLuminanceCoefficients(rs);const s=rs.x.toFixed(4),t=rs.y.toFixed(4),e=rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function mf(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gf(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(t,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function Ri(s){return s!==""}function Zr(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jr(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _f=/^[ \t]*#include +<([\w\d./]+)>/gm;function Na(s){return s.replace(_f,vf)}const xf=new Map;function vf(s,t){let e=Yt[t];if(e===void 0){const n=xf.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Na(e)}const Mf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $r(s){return s.replace(Mf,yf)}function yf(s,t,e,n){let i="";for(let a=parseInt(t);a<parseInt(e);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Jr(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sf(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ro?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===oo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ln&&(t="SHADOWMAP_TYPE_VSM"),t}function wf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case di:case fi:t="ENVMAP_TYPE_CUBE";break;case gs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tf(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fi:t="ENVMAP_MODE_REFRACTION";break}return t}function Ef(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case co:t="ENVMAP_BLENDING_MULTIPLY";break;case hc:t="ENVMAP_BLENDING_MIX";break;case uc:t="ENVMAP_BLENDING_ADD";break}return t}function bf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Af(s,t,e,n){const i=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const c=Sf(e),l=wf(e),u=Tf(e),d=Ef(e),p=bf(e),m=pf(e),_=mf(a),g=i.createProgram();let f,h,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ri).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ri).join(`
`),h.length>0&&(h+=`
`)):(f=[Jr(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),h=[Jr(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==bn?df("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,uf("linearToOutputTexel",e.outputColorSpace),ff(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ri).join(`
`)),r=Na(r),r=Zr(r,e),r=jr(r,e),o=Na(o),o=Zr(o,e),o=jr(o,e),r=$r(r),o=$r(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",e.glslVersion===hr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=S+f+r,x=S+h+o,D=qr(i,i.VERTEX_SHADER,T),b=qr(i,i.FRAGMENT_SHADER,x);i.attachShader(g,D),i.attachShader(g,b),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function P(R){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(g).trim(),I=i.getShaderInfoLog(D).trim(),H=i.getShaderInfoLog(b).trim();let z=!0,q=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,D,b);else{const j=Kr(i,D,"vertex"),V=Kr(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+j+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(I===""||H==="")&&(q=!1);q&&(R.diagnostics={runnable:z,programLog:k,vertexShader:{log:I,prefix:f},fragmentShader:{log:H,prefix:h}})}i.deleteShader(D),i.deleteShader(b),C=new fs(i,g),v=gf(i,g)}let C;this.getUniforms=function(){return C===void 0&&P(this),C};let v;this.getAttributes=function(){return v===void 0&&P(this),v};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,of)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cf++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=D,this.fragmentShader=b,this}let Pf=0;class Rf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Cf(t),e.set(t,n)),n}}class Cf{constructor(t){this.id=Pf++,this.code=t,this.usedTimes=0}}function Df(s,t,e,n,i,a,r){const o=new bo,c=new Rf,l=new Set,u=[],d=i.logarithmicDepthBuffer,p=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,M,R,k,I){const H=k.fog,z=I.geometry,q=v.isMeshStandardMaterial?k.environment:null,j=(v.isMeshStandardMaterial?e:t).get(v.envMap||q),V=j&&j.mapping===gs?j.image.height:null,it=_[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const nt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,dt=nt!==void 0?nt.length:0;let Ut=0;z.morphAttributes.position!==void 0&&(Ut=1),z.morphAttributes.normal!==void 0&&(Ut=2),z.morphAttributes.color!==void 0&&(Ut=3);let lt,B,Y,ut;if(it){const se=$e[it];lt=se.vertexShader,B=se.fragmentShader}else lt=v.vertexShader,B=v.fragmentShader,c.update(v),Y=c.getVertexShaderID(v),ut=c.getFragmentShaderID(v);const rt=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),ht=I.isInstancedMesh===!0,st=I.isBatchedMesh===!0,vt=!!v.map,It=!!v.matcap,Ft=!!j,U=!!v.aoMap,re=!!v.lightMap,Bt=!!v.bumpMap,Gt=!!v.normalMap,Mt=!!v.displacementMap,Kt=!!v.emissiveMap,wt=!!v.metalnessMap,A=!!v.roughnessMap,y=v.anisotropy>0,G=v.clearcoat>0,J=v.dispersion>0,tt=v.iridescence>0,$=v.sheen>0,Pt=v.transmission>0,pt=y&&!!v.anisotropyMap,Tt=G&&!!v.clearcoatMap,Jt=G&&!!v.clearcoatNormalMap,at=G&&!!v.clearcoatRoughnessMap,Et=tt&&!!v.iridescenceMap,Ot=tt&&!!v.iridescenceThicknessMap,kt=$&&!!v.sheenColorMap,bt=$&&!!v.sheenRoughnessMap,jt=!!v.specularMap,qt=!!v.specularColorMap,he=!!v.specularIntensityMap,N=Pt&&!!v.transmissionMap,mt=Pt&&!!v.thicknessMap,Z=!!v.gradientMap,Q=!!v.alphaMap,xt=v.alphaTest>0,gt=!!v.alphaHash,Ht=!!v.extensions;let me=bn;v.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(me=s.toneMapping);const Te={shaderID:it,shaderType:v.type,shaderName:v.name,vertexShader:lt,fragmentShader:B,defines:v.defines,customVertexShaderID:Y,customFragmentShaderID:ut,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:st,batchingColor:st&&I._colorsTexture!==null,instancing:ht,instancingColor:ht&&I.instanceColor!==null,instancingMorph:ht&&I.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:_i,alphaToCoverage:!!v.alphaToCoverage,map:vt,matcap:It,envMap:Ft,envMapMode:Ft&&j.mapping,envMapCubeUVHeight:V,aoMap:U,lightMap:re,bumpMap:Bt,normalMap:Gt,displacementMap:p&&Mt,emissiveMap:Kt,normalMapObjectSpace:Gt&&v.normalMapType===Sc,normalMapTangentSpace:Gt&&v.normalMapType===yo,metalnessMap:wt,roughnessMap:A,anisotropy:y,anisotropyMap:pt,clearcoat:G,clearcoatMap:Tt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:at,dispersion:J,iridescence:tt,iridescenceMap:Et,iridescenceThicknessMap:Ot,sheen:$,sheenColorMap:kt,sheenRoughnessMap:bt,specularMap:jt,specularColorMap:qt,specularIntensityMap:he,transmission:Pt,transmissionMap:N,thicknessMap:mt,gradientMap:Z,opaque:v.transparent===!1&&v.blending===ci&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:xt,alphaHash:gt,combine:v.combine,mapUv:vt&&g(v.map.channel),aoMapUv:U&&g(v.aoMap.channel),lightMapUv:re&&g(v.lightMap.channel),bumpMapUv:Bt&&g(v.bumpMap.channel),normalMapUv:Gt&&g(v.normalMap.channel),displacementMapUv:Mt&&g(v.displacementMap.channel),emissiveMapUv:Kt&&g(v.emissiveMap.channel),metalnessMapUv:wt&&g(v.metalnessMap.channel),roughnessMapUv:A&&g(v.roughnessMap.channel),anisotropyMapUv:pt&&g(v.anisotropyMap.channel),clearcoatMapUv:Tt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(v.sheenRoughnessMap.channel),specularMapUv:jt&&g(v.specularMap.channel),specularColorMapUv:qt&&g(v.specularColorMap.channel),specularIntensityMapUv:he&&g(v.specularIntensityMap.channel),transmissionMapUv:N&&g(v.transmissionMap.channel),thicknessMapUv:mt&&g(v.thicknessMap.channel),alphaMapUv:Q&&g(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Gt||y),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(vt||Q),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:At,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:me,decodeVideoTexture:vt&&v.map.isVideoTexture===!0&&te.getTransfer(v.map.colorSpace)===ce,decodeVideoTextureEmissive:Kt&&v.emissiveMap.isVideoTexture===!0&&te.getTransfer(v.emissiveMap.colorSpace)===ce,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===qe,flipSided:v.side===Ie,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ht&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&v.extensions.multiDraw===!0||st)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function h(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)M.push(R),M.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(S(M,v),T(M,v),M.push(s.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function S(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function T(v,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),v.push(o.mask)}function x(v){const M=_[v.type];let R;if(M){const k=$e[M];R=fl.clone(k.uniforms)}else R=v.uniforms;return R}function D(v,M){let R;for(let k=0,I=u.length;k<I;k++){const H=u[k];if(H.cacheKey===M){R=H,++R.usedTimes;break}}return R===void 0&&(R=new Af(s,M,v,a),u.push(R)),R}function b(v){if(--v.usedTimes===0){const M=u.indexOf(v);u[M]=u[u.length-1],u.pop(),v.destroy()}}function P(v){c.remove(v)}function C(){c.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:x,acquireProgram:D,releaseProgram:b,releaseShaderCache:P,programs:u,dispose:C}}function If(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,c){s.get(r)[o]=c}function a(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:a}}function Lf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Qr(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function to(){const s=[];let t=0;const e=[],n=[],i=[];function a(){t=0,e.length=0,n.length=0,i.length=0}function r(d,p,m,_,g,f){let h=s[t];return h===void 0?(h={id:d.id,object:d,geometry:p,material:m,groupOrder:_,renderOrder:d.renderOrder,z:g,group:f},s[t]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=m,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=g,h.group=f),t++,h}function o(d,p,m,_,g,f){const h=r(d,p,m,_,g,f);m.transmission>0?n.push(h):m.transparent===!0?i.push(h):e.push(h)}function c(d,p,m,_,g,f){const h=r(d,p,m,_,g,f);m.transmission>0?n.unshift(h):m.transparent===!0?i.unshift(h):e.unshift(h)}function l(d,p){e.length>1&&e.sort(d||Lf),n.length>1&&n.sort(p||Qr),i.length>1&&i.sort(p||Qr)}function u(){for(let d=t,p=s.length;d<p;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:a,push:o,unshift:c,finish:u,sort:l}}function Uf(){let s=new WeakMap;function t(n,i){const a=s.get(n);let r;return a===void 0?(r=new to,s.set(n,[r])):i>=a.length?(r=new to,a.push(r)):r=a[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Nf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new $t};break;case"SpotLight":e={position:new L,direction:new L,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Ff(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Of=0;function Bf(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function kf(s){const t=new Nf,e=Ff(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,a=new pe,r=new pe;function o(l){let u=0,d=0,p=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let m=0,_=0,g=0,f=0,h=0,S=0,T=0,x=0,D=0,b=0,P=0;l.sort(Bf);for(let v=0,M=l.length;v<M;v++){const R=l[v],k=R.color,I=R.intensity,H=R.distance,z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=k.r*I,d+=k.g*I,p+=k.b*I;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],I);P++}else if(R.isDirectionalLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,V=e.get(R);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=z,n.directionalShadowMatrix[m]=R.shadow.matrix,S++}n.directional[m]=q,m++}else if(R.isSpotLight){const q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(k).multiplyScalar(I),q.distance=H,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[g]=q;const j=R.shadow;if(R.map&&(n.spotLightMap[D]=R.map,D++,j.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[g]=j.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=z,x++}g++}else if(R.isRectAreaLight){const q=t.get(R);q.color.copy(k).multiplyScalar(I),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[f]=q,f++}else if(R.isPointLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const j=R.shadow,V=e.get(R);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=z,n.pointShadowMatrix[_]=R.shadow.matrix,T++}n.point[_]=q,_++}else if(R.isHemisphereLight){const q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(I),q.groundColor.copy(R.groundColor).multiplyScalar(I),n.hemi[h]=q,h++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;const C=n.hash;(C.directionalLength!==m||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==f||C.hemiLength!==h||C.numDirectionalShadows!==S||C.numPointShadows!==T||C.numSpotShadows!==x||C.numSpotMaps!==D||C.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=f,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=x+D-b,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=P,C.directionalLength=m,C.pointLength=_,C.spotLength=g,C.rectAreaLength=f,C.hemiLength=h,C.numDirectionalShadows=S,C.numPointShadows=T,C.numSpotShadows=x,C.numSpotMaps=D,C.numLightProbes=P,n.version=Of++)}function c(l,u){let d=0,p=0,m=0,_=0,g=0;const f=u.matrixWorldInverse;for(let h=0,S=l.length;h<S;h++){const T=l[h];if(T.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(f),d++}else if(T.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(f),m++}else if(T.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(f),r.identity(),a.copy(T.matrixWorld),a.premultiply(f),r.extractRotation(a),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),_++}else if(T.isPointLight){const x=n.point[p];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(f),p++}else if(T.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(f),g++}}}return{setup:o,setupView:c,state:n}}function eo(s){const t=new kf(s),e=[],n=[];function i(u){l.camera=u,e.length=0,n.length=0}function a(u){e.push(u)}function r(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function zf(s){let t=new WeakMap;function e(i,a=0){const r=t.get(i);let o;return r===void 0?(o=new eo(s),t.set(i,[o])):a>=r.length?(o=new eo(s),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Gf extends Oi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hf extends Oi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xf(s,t,e){let n=new Xa;const i=new Zt,a=new Zt,r=new le,o=new Gf({depthPacking:yc}),c=new Hf,l={},u=e.maxTextureSize,d={[An]:Ie,[Ie]:An,[qe]:qe},p=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:Vf,fragmentShader:Wf}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new ze;_.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new E(_,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ro;let h=this.type;this.render=function(b,P,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const v=s.getRenderTarget(),M=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),k=s.state;k.setBlending(En),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const I=h!==ln&&this.type===ln,H=h===ln&&this.type!==ln;for(let z=0,q=b.length;z<q;z++){const j=b[z],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const it=V.getFrameExtents();if(i.multiply(it),a.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/it.x),i.x=a.x*it.x,V.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/it.y),i.y=a.y*it.y,V.mapSize.y=a.y)),V.map===null||I===!0||H===!0){const dt=this.type!==ln?{minFilter:Ze,magFilter:Ze}:{};V.map!==null&&V.map.dispose(),V.map=new Vn(i.x,i.y,dt),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const nt=V.getViewportCount();for(let dt=0;dt<nt;dt++){const Ut=V.getViewport(dt);r.set(a.x*Ut.x,a.y*Ut.y,a.x*Ut.z,a.y*Ut.w),k.viewport(r),V.updateMatrices(j,dt),n=V.getFrustum(),x(P,C,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===ln&&S(V,C),V.needsUpdate=!1}h=this.type,f.needsUpdate=!1,s.setRenderTarget(v,M,R)};function S(b,P){const C=t.update(g);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Vn(i.x,i.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(P,null,C,p,g,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(P,null,C,m,g,null)}function T(b,P,C,v){let M=null;const R=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)M=R;else if(M=C.isPointLight===!0?c:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const k=M.uuid,I=P.uuid;let H=l[k];H===void 0&&(H={},l[k]=H);let z=H[I];z===void 0&&(z=M.clone(),H[I]=z,P.addEventListener("dispose",D)),M=z}if(M.visible=P.visible,M.wireframe=P.wireframe,v===ln?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:d[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=s.properties.get(M);k.light=C}return M}function x(b,P,C,v,M){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===ln)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const I=t.update(b),H=b.material;if(Array.isArray(H)){const z=I.groups;for(let q=0,j=z.length;q<j;q++){const V=z[q],it=H[V.materialIndex];if(it&&it.visible){const nt=T(b,it,v,M);b.onBeforeShadow(s,b,P,C,I,nt,V),s.renderBufferDirect(C,null,I,nt,b,V),b.onAfterShadow(s,b,P,C,I,nt,V)}}}else if(H.visible){const z=T(b,H,v,M);b.onBeforeShadow(s,b,P,C,I,z,null),s.renderBufferDirect(C,null,I,z,b,null),b.onAfterShadow(s,b,P,C,I,z,null)}}const k=b.children;for(let I=0,H=k.length;I<H;I++)x(k[I],P,C,v,M)}function D(b){b.target.removeEventListener("dispose",D);for(const C in l){const v=l[C],M=b.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const qf={[Js]:Qs,[ta]:ia,[ea]:sa,[ui]:na,[Qs]:Js,[ia]:ta,[sa]:ea,[na]:ui};function Yf(s,t){function e(){let N=!1;const mt=new le;let Z=null;const Q=new le(0,0,0,0);return{setMask:function(xt){Z!==xt&&!N&&(s.colorMask(xt,xt,xt,xt),Z=xt)},setLocked:function(xt){N=xt},setClear:function(xt,gt,Ht,me,Te){Te===!0&&(xt*=me,gt*=me,Ht*=me),mt.set(xt,gt,Ht,me),Q.equals(mt)===!1&&(s.clearColor(xt,gt,Ht,me),Q.copy(mt))},reset:function(){N=!1,Z=null,Q.set(-1,0,0,0)}}}function n(){let N=!1,mt=!1,Z=null,Q=null,xt=null;return{setReversed:function(gt){if(mt!==gt){const Ht=t.get("EXT_clip_control");mt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const me=xt;xt=null,this.setClear(me)}mt=gt},getReversed:function(){return mt},setTest:function(gt){gt?rt(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(gt){Z!==gt&&!N&&(s.depthMask(gt),Z=gt)},setFunc:function(gt){if(mt&&(gt=qf[gt]),Q!==gt){switch(gt){case Js:s.depthFunc(s.NEVER);break;case Qs:s.depthFunc(s.ALWAYS);break;case ta:s.depthFunc(s.LESS);break;case ui:s.depthFunc(s.LEQUAL);break;case ea:s.depthFunc(s.EQUAL);break;case na:s.depthFunc(s.GEQUAL);break;case ia:s.depthFunc(s.GREATER);break;case sa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=gt}},setLocked:function(gt){N=gt},setClear:function(gt){xt!==gt&&(mt&&(gt=1-gt),s.clearDepth(gt),xt=gt)},reset:function(){N=!1,Z=null,Q=null,xt=null,mt=!1}}}function i(){let N=!1,mt=null,Z=null,Q=null,xt=null,gt=null,Ht=null,me=null,Te=null;return{setTest:function(se){N||(se?rt(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(se){mt!==se&&!N&&(s.stencilMask(se),mt=se)},setFunc:function(se,Ge,en){(Z!==se||Q!==Ge||xt!==en)&&(s.stencilFunc(se,Ge,en),Z=se,Q=Ge,xt=en)},setOp:function(se,Ge,en){(gt!==se||Ht!==Ge||me!==en)&&(s.stencilOp(se,Ge,en),gt=se,Ht=Ge,me=en)},setLocked:function(se){N=se},setClear:function(se){Te!==se&&(s.clearStencil(se),Te=se)},reset:function(){N=!1,mt=null,Z=null,Q=null,xt=null,gt=null,Ht=null,me=null,Te=null}}}const a=new e,r=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},d={},p=new WeakMap,m=[],_=null,g=!1,f=null,h=null,S=null,T=null,x=null,D=null,b=null,P=new $t(0,0,0),C=0,v=!1,M=null,R=null,k=null,I=null,H=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=j>=2);let it=null,nt={};const dt=s.getParameter(s.SCISSOR_BOX),Ut=s.getParameter(s.VIEWPORT),lt=new le().fromArray(dt),B=new le().fromArray(Ut);function Y(N,mt,Z,Q){const xt=new Uint8Array(4),gt=s.createTexture();s.bindTexture(N,gt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<Z;Ht++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(mt+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return gt}const ut={};ut[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),ut[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ut[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),rt(s.DEPTH_TEST),r.setFunc(ui),Bt(!1),Gt(sr),rt(s.CULL_FACE),U(En);function rt(N){u[N]!==!0&&(s.enable(N),u[N]=!0)}function At(N){u[N]!==!1&&(s.disable(N),u[N]=!1)}function ht(N,mt){return d[N]!==mt?(s.bindFramebuffer(N,mt),d[N]=mt,N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=mt),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function st(N,mt){let Z=m,Q=!1;if(N){Z=p.get(mt),Z===void 0&&(Z=[],p.set(mt,Z));const xt=N.textures;if(Z.length!==xt.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,Ht=xt.length;gt<Ht;gt++)Z[gt]=s.COLOR_ATTACHMENT0+gt;Z.length=xt.length,Q=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,Q=!0);Q&&s.drawBuffers(Z)}function vt(N){return _!==N?(s.useProgram(N),_=N,!0):!1}const It={[Bn]:s.FUNC_ADD,[Yo]:s.FUNC_SUBTRACT,[Ko]:s.FUNC_REVERSE_SUBTRACT};It[Zo]=s.MIN,It[jo]=s.MAX;const Ft={[$o]:s.ZERO,[Jo]:s.ONE,[Qo]:s.SRC_COLOR,[js]:s.SRC_ALPHA,[ac]:s.SRC_ALPHA_SATURATE,[ic]:s.DST_COLOR,[ec]:s.DST_ALPHA,[tc]:s.ONE_MINUS_SRC_COLOR,[$s]:s.ONE_MINUS_SRC_ALPHA,[sc]:s.ONE_MINUS_DST_COLOR,[nc]:s.ONE_MINUS_DST_ALPHA,[rc]:s.CONSTANT_COLOR,[oc]:s.ONE_MINUS_CONSTANT_COLOR,[cc]:s.CONSTANT_ALPHA,[lc]:s.ONE_MINUS_CONSTANT_ALPHA};function U(N,mt,Z,Q,xt,gt,Ht,me,Te,se){if(N===En){g===!0&&(At(s.BLEND),g=!1);return}if(g===!1&&(rt(s.BLEND),g=!0),N!==qo){if(N!==f||se!==v){if((h!==Bn||x!==Bn)&&(s.blendEquation(s.FUNC_ADD),h=Bn,x=Bn),se)switch(N){case ci:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ar:s.blendFunc(s.ONE,s.ONE);break;case rr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case or:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ci:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ar:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case rr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case or:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,T=null,D=null,b=null,P.set(0,0,0),C=0,f=N,v=se}return}xt=xt||mt,gt=gt||Z,Ht=Ht||Q,(mt!==h||xt!==x)&&(s.blendEquationSeparate(It[mt],It[xt]),h=mt,x=xt),(Z!==S||Q!==T||gt!==D||Ht!==b)&&(s.blendFuncSeparate(Ft[Z],Ft[Q],Ft[gt],Ft[Ht]),S=Z,T=Q,D=gt,b=Ht),(me.equals(P)===!1||Te!==C)&&(s.blendColor(me.r,me.g,me.b,Te),P.copy(me),C=Te),f=N,v=!1}function re(N,mt){N.side===qe?At(s.CULL_FACE):rt(s.CULL_FACE);let Z=N.side===Ie;mt&&(Z=!Z),Bt(Z),N.blending===ci&&N.transparent===!1?U(En):U(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);const Q=N.stencilWrite;o.setTest(Q),Q&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Kt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(N){M!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),M=N)}function Gt(N){N!==Wo?(rt(s.CULL_FACE),N!==R&&(N===sr?s.cullFace(s.BACK):N===Xo?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),R=N}function Mt(N){N!==k&&(q&&s.lineWidth(N),k=N)}function Kt(N,mt,Z){N?(rt(s.POLYGON_OFFSET_FILL),(I!==mt||H!==Z)&&(s.polygonOffset(mt,Z),I=mt,H=Z)):At(s.POLYGON_OFFSET_FILL)}function wt(N){N?rt(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function A(N){N===void 0&&(N=s.TEXTURE0+z-1),it!==N&&(s.activeTexture(N),it=N)}function y(N,mt,Z){Z===void 0&&(it===null?Z=s.TEXTURE0+z-1:Z=it);let Q=nt[Z];Q===void 0&&(Q={type:void 0,texture:void 0},nt[Z]=Q),(Q.type!==N||Q.texture!==mt)&&(it!==Z&&(s.activeTexture(Z),it=Z),s.bindTexture(N,mt||ut[N]),Q.type=N,Q.texture=mt)}function G(){const N=nt[it];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ot(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(N){lt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),lt.copy(N))}function bt(N){B.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),B.copy(N))}function jt(N,mt){let Z=l.get(mt);Z===void 0&&(Z=new WeakMap,l.set(mt,Z));let Q=Z.get(N);Q===void 0&&(Q=s.getUniformBlockIndex(mt,N.name),Z.set(N,Q))}function qt(N,mt){const Q=l.get(mt).get(N);c.get(mt)!==Q&&(s.uniformBlockBinding(mt,Q,N.__bindingPointIndex),c.set(mt,Q))}function he(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},it=null,nt={},d={},p=new WeakMap,m=[],_=null,g=!1,f=null,h=null,S=null,T=null,x=null,D=null,b=null,P=new $t(0,0,0),C=0,v=!1,M=null,R=null,k=null,I=null,H=null,lt.set(0,0,s.canvas.width,s.canvas.height),B.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:rt,disable:At,bindFramebuffer:ht,drawBuffers:st,useProgram:vt,setBlending:U,setMaterial:re,setFlipSided:Bt,setCullFace:Gt,setLineWidth:Mt,setPolygonOffset:Kt,setScissorTest:wt,activeTexture:A,bindTexture:y,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:tt,texImage2D:Et,texImage3D:Ot,updateUBOMapping:jt,uniformBlockBinding:qt,texStorage2D:Jt,texStorage3D:at,texSubImage2D:$,texSubImage3D:Pt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Tt,scissor:kt,viewport:bt,reset:he}}function no(s,t,e,n){const i=Kf(n);switch(e){case po:return s*t;case go:return s*t;case _o:return s*t*2;case xo:return s*t/i.components*i.byteLength;case za:return s*t/i.components*i.byteLength;case vo:return s*t*2/i.components*i.byteLength;case Ga:return s*t*2/i.components*i.byteLength;case mo:return s*t*3/i.components*i.byteLength;case Ke:return s*t*4/i.components*i.byteLength;case Ha:return s*t*4/i.components*i.byteLength;case cs:case ls:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case hs:case us:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ha:case da:return Math.max(s,16)*Math.max(t,8)/4;case la:case ua:return Math.max(s,8)*Math.max(t,8)/2;case fa:case pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case xa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case va:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ya:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case wa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ba:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ds:case Ca:case Da:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Mo:case Ia:return Math.ceil(s/4)*Math.ceil(t/4)*8;case La:case Ua:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kf(s){switch(s){case fn:case ho:return{byteLength:1,components:1};case Ii:case uo:case Ni:return{byteLength:2,components:1};case Ba:case ka:return{byteLength:2,components:4};case Hn:case Oa:case hn:return{byteLength:4,components:1};case fo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Zf(s,t,e,n,i,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Zt,u=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,y){return m?new OffscreenCanvas(A,y):ms("canvas")}function g(A,y,G){let J=1;const tt=wt(A);if((tt.width>G||tt.height>G)&&(J=G/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(J*tt.width),Pt=Math.floor(J*tt.height);d===void 0&&(d=_($,Pt));const pt=y?_($,Pt):d;return pt.width=$,pt.height=Pt,pt.getContext("2d").drawImage(A,0,0,$,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+$+"x"+Pt+")."),pt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function f(A){return A.generateMipmaps}function h(A){s.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(A,y,G,J,tt=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=y;if(y===s.RED&&(G===s.FLOAT&&($=s.R32F),G===s.HALF_FLOAT&&($=s.R16F),G===s.UNSIGNED_BYTE&&($=s.R8)),y===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.R8UI),G===s.UNSIGNED_SHORT&&($=s.R16UI),G===s.UNSIGNED_INT&&($=s.R32UI),G===s.BYTE&&($=s.R8I),G===s.SHORT&&($=s.R16I),G===s.INT&&($=s.R32I)),y===s.RG&&(G===s.FLOAT&&($=s.RG32F),G===s.HALF_FLOAT&&($=s.RG16F),G===s.UNSIGNED_BYTE&&($=s.RG8)),y===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RG8UI),G===s.UNSIGNED_SHORT&&($=s.RG16UI),G===s.UNSIGNED_INT&&($=s.RG32UI),G===s.BYTE&&($=s.RG8I),G===s.SHORT&&($=s.RG16I),G===s.INT&&($=s.RG32I)),y===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RGB8UI),G===s.UNSIGNED_SHORT&&($=s.RGB16UI),G===s.UNSIGNED_INT&&($=s.RGB32UI),G===s.BYTE&&($=s.RGB8I),G===s.SHORT&&($=s.RGB16I),G===s.INT&&($=s.RGB32I)),y===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RGBA8UI),G===s.UNSIGNED_SHORT&&($=s.RGBA16UI),G===s.UNSIGNED_INT&&($=s.RGBA32UI),G===s.BYTE&&($=s.RGBA8I),G===s.SHORT&&($=s.RGBA16I),G===s.INT&&($=s.RGBA32I)),y===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),y===s.RGBA){const Pt=tt?_s:te.getTransfer(J);G===s.FLOAT&&($=s.RGBA32F),G===s.HALF_FLOAT&&($=s.RGBA16F),G===s.UNSIGNED_BYTE&&($=Pt===ce?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(A,y){let G;return A?y===null||y===Hn||y===pi?G=s.DEPTH24_STENCIL8:y===hn?G=s.DEPTH32F_STENCIL8:y===Ii&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Hn||y===pi?G=s.DEPTH_COMPONENT24:y===hn?G=s.DEPTH_COMPONENT32F:y===Ii&&(G=s.DEPTH_COMPONENT16),G}function D(A,y){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ze&&A.minFilter!==Je?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function b(A){const y=A.target;y.removeEventListener("dispose",b),C(y),y.isVideoTexture&&u.delete(y)}function P(A){const y=A.target;y.removeEventListener("dispose",P),M(y)}function C(A){const y=n.get(A);if(y.__webglInit===void 0)return;const G=A.source,J=p.get(G);if(J){const tt=J[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&v(A),Object.keys(J).length===0&&p.delete(G)}n.remove(A)}function v(A){const y=n.get(A);s.deleteTexture(y.__webglTexture);const G=A.source,J=p.get(G);delete J[y.__cacheKey],r.memory.textures--}function M(A){const y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let tt=0;tt<y.__webglFramebuffer[J].length;tt++)s.deleteFramebuffer(y.__webglFramebuffer[J][tt]);else s.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)s.deleteFramebuffer(y.__webglFramebuffer[J]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=A.textures;for(let J=0,tt=G.length;J<tt;J++){const $=n.get(G[J]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),r.memory.textures--),n.remove(G[J])}n.remove(A)}let R=0;function k(){R=0}function I(){const A=R;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),R+=1,A}function H(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function z(A,y){const G=n.get(A);if(A.isVideoTexture&&Mt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(G,A,y);return}}e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+y)}function q(A,y){const G=n.get(A);if(A.version>0&&G.__version!==A.version){B(G,A,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+y)}function j(A,y){const G=n.get(A);if(A.version>0&&G.__version!==A.version){B(G,A,y);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+y)}function V(A,y){const G=n.get(A);if(A.version>0&&G.__version!==A.version){Y(G,A,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+y)}const it={[oa]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[ca]:s.MIRRORED_REPEAT},nt={[Ze]:s.NEAREST,[vc]:s.NEAREST_MIPMAP_NEAREST,[zi]:s.NEAREST_MIPMAP_LINEAR,[Je]:s.LINEAR,[Ms]:s.LINEAR_MIPMAP_NEAREST,[Gn]:s.LINEAR_MIPMAP_LINEAR},dt={[wc]:s.NEVER,[Rc]:s.ALWAYS,[Tc]:s.LESS,[So]:s.LEQUAL,[Ec]:s.EQUAL,[Pc]:s.GEQUAL,[bc]:s.GREATER,[Ac]:s.NOTEQUAL};function Ut(A,y){if(y.type===hn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Je||y.magFilter===Ms||y.magFilter===zi||y.magFilter===Gn||y.minFilter===Je||y.minFilter===Ms||y.minFilter===zi||y.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,it[y.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,it[y.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,it[y.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,nt[y.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,nt[y.minFilter]),y.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,dt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ze||y.minFilter!==zi&&y.minFilter!==Gn||y.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function lt(A,y){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",b));const J=y.source;let tt=p.get(J);tt===void 0&&(tt={},p.set(J,tt));const $=H(y);if($!==A.__cacheKey){tt[$]===void 0&&(tt[$]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,G=!0),tt[$].usedTimes++;const Pt=tt[A.__cacheKey];Pt!==void 0&&(tt[A.__cacheKey].usedTimes--,Pt.usedTimes===0&&v(y)),A.__cacheKey=$,A.__webglTexture=tt[$].texture}return G}function B(A,y,G){let J=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=s.TEXTURE_3D);const tt=lt(A,y),$=y.source;e.bindTexture(J,A.__webglTexture,s.TEXTURE0+G);const Pt=n.get($);if($.version!==Pt.__version||tt===!0){e.activeTexture(s.TEXTURE0+G);const pt=te.getPrimaries(te.workingColorSpace),Tt=y.colorSpace===Tn?null:te.getPrimaries(y.colorSpace),Jt=y.colorSpace===Tn||pt===Tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let at=g(y.image,!1,i.maxTextureSize);at=Kt(y,at);const Et=a.convert(y.format,y.colorSpace),Ot=a.convert(y.type);let kt=T(y.internalFormat,Et,Ot,y.colorSpace,y.isVideoTexture);Ut(J,y);let bt;const jt=y.mipmaps,qt=y.isVideoTexture!==!0,he=Pt.__version===void 0||tt===!0,N=$.dataReady,mt=D(y,at);if(y.isDepthTexture)kt=x(y.format===mi,y.type),he&&(qt?e.texStorage2D(s.TEXTURE_2D,1,kt,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,kt,at.width,at.height,0,Et,Ot,null));else if(y.isDataTexture)if(jt.length>0){qt&&he&&e.texStorage2D(s.TEXTURE_2D,mt,kt,jt[0].width,jt[0].height);for(let Z=0,Q=jt.length;Z<Q;Z++)bt=jt[Z],qt?N&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,bt.width,bt.height,Et,Ot,bt.data):e.texImage2D(s.TEXTURE_2D,Z,kt,bt.width,bt.height,0,Et,Ot,bt.data);y.generateMipmaps=!1}else qt?(he&&e.texStorage2D(s.TEXTURE_2D,mt,kt,at.width,at.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,at.width,at.height,Et,Ot,at.data)):e.texImage2D(s.TEXTURE_2D,0,kt,at.width,at.height,0,Et,Ot,at.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qt&&he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,kt,jt[0].width,jt[0].height,at.depth);for(let Z=0,Q=jt.length;Z<Q;Z++)if(bt=jt[Z],y.format!==Ke)if(Et!==null)if(qt){if(N)if(y.layerUpdates.size>0){const xt=no(bt.width,bt.height,y.format,y.type);for(const gt of y.layerUpdates){const Ht=bt.data.subarray(gt*xt/bt.data.BYTES_PER_ELEMENT,(gt+1)*xt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,gt,bt.width,bt.height,1,Et,Ht)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,bt.width,bt.height,at.depth,Et,bt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,kt,bt.width,bt.height,at.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,bt.width,bt.height,at.depth,Et,Ot,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,kt,bt.width,bt.height,at.depth,0,Et,Ot,bt.data)}else{qt&&he&&e.texStorage2D(s.TEXTURE_2D,mt,kt,jt[0].width,jt[0].height);for(let Z=0,Q=jt.length;Z<Q;Z++)bt=jt[Z],y.format!==Ke?Et!==null?qt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,bt.width,bt.height,Et,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,kt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?N&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,bt.width,bt.height,Et,Ot,bt.data):e.texImage2D(s.TEXTURE_2D,Z,kt,bt.width,bt.height,0,Et,Ot,bt.data)}else if(y.isDataArrayTexture)if(qt){if(he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,kt,at.width,at.height,at.depth),N)if(y.layerUpdates.size>0){const Z=no(at.width,at.height,y.format,y.type);for(const Q of y.layerUpdates){const xt=at.data.subarray(Q*Z/at.data.BYTES_PER_ELEMENT,(Q+1)*Z/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,at.width,at.height,1,Et,Ot,xt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Et,Ot,at.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,kt,at.width,at.height,at.depth,0,Et,Ot,at.data);else if(y.isData3DTexture)qt?(he&&e.texStorage3D(s.TEXTURE_3D,mt,kt,at.width,at.height,at.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Et,Ot,at.data)):e.texImage3D(s.TEXTURE_3D,0,kt,at.width,at.height,at.depth,0,Et,Ot,at.data);else if(y.isFramebufferTexture){if(he)if(qt)e.texStorage2D(s.TEXTURE_2D,mt,kt,at.width,at.height);else{let Z=at.width,Q=at.height;for(let xt=0;xt<mt;xt++)e.texImage2D(s.TEXTURE_2D,xt,kt,Z,Q,0,Et,Ot,null),Z>>=1,Q>>=1}}else if(jt.length>0){if(qt&&he){const Z=wt(jt[0]);e.texStorage2D(s.TEXTURE_2D,mt,kt,Z.width,Z.height)}for(let Z=0,Q=jt.length;Z<Q;Z++)bt=jt[Z],qt?N&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Et,Ot,bt):e.texImage2D(s.TEXTURE_2D,Z,kt,Et,Ot,bt);y.generateMipmaps=!1}else if(qt){if(he){const Z=wt(at);e.texStorage2D(s.TEXTURE_2D,mt,kt,Z.width,Z.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Et,Ot,at)}else e.texImage2D(s.TEXTURE_2D,0,kt,Et,Ot,at);f(y)&&h(J),Pt.__version=$.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Y(A,y,G){if(y.image.length!==6)return;const J=lt(A,y),tt=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+G);const $=n.get(tt);if(tt.version!==$.__version||J===!0){e.activeTexture(s.TEXTURE0+G);const Pt=te.getPrimaries(te.workingColorSpace),pt=y.colorSpace===Tn?null:te.getPrimaries(y.colorSpace),Tt=y.colorSpace===Tn||Pt===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Jt=y.isCompressedTexture||y.image[0].isCompressedTexture,at=y.image[0]&&y.image[0].isDataTexture,Et=[];for(let Q=0;Q<6;Q++)!Jt&&!at?Et[Q]=g(y.image[Q],!0,i.maxCubemapSize):Et[Q]=at?y.image[Q].image:y.image[Q],Et[Q]=Kt(y,Et[Q]);const Ot=Et[0],kt=a.convert(y.format,y.colorSpace),bt=a.convert(y.type),jt=T(y.internalFormat,kt,bt,y.colorSpace),qt=y.isVideoTexture!==!0,he=$.__version===void 0||J===!0,N=tt.dataReady;let mt=D(y,Ot);Ut(s.TEXTURE_CUBE_MAP,y);let Z;if(Jt){qt&&he&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,jt,Ot.width,Ot.height);for(let Q=0;Q<6;Q++){Z=Et[Q].mipmaps;for(let xt=0;xt<Z.length;xt++){const gt=Z[xt];y.format!==Ke?kt!==null?qt?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,gt.width,gt.height,kt,gt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,jt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,gt.width,gt.height,kt,bt,gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,jt,gt.width,gt.height,0,kt,bt,gt.data)}}}else{if(Z=y.mipmaps,qt&&he){Z.length>0&&mt++;const Q=wt(Et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,jt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(at){qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Et[Q].width,Et[Q].height,kt,bt,Et[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,jt,Et[Q].width,Et[Q].height,0,kt,bt,Et[Q].data);for(let xt=0;xt<Z.length;xt++){const Ht=Z[xt].image[Q].image;qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,Ht.width,Ht.height,kt,bt,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,jt,Ht.width,Ht.height,0,kt,bt,Ht.data)}}else{qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,kt,bt,Et[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,jt,kt,bt,Et[Q]);for(let xt=0;xt<Z.length;xt++){const gt=Z[xt];qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,kt,bt,gt.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,jt,kt,bt,gt.image[Q])}}}f(y)&&h(s.TEXTURE_CUBE_MAP),$.__version=tt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ut(A,y,G,J,tt,$){const Pt=a.convert(G.format,G.colorSpace),pt=a.convert(G.type),Tt=T(G.internalFormat,Pt,pt,G.colorSpace),Jt=n.get(y),at=n.get(G);if(at.__renderTarget=y,!Jt.__hasExternalTextures){const Et=Math.max(1,y.width>>$),Ot=Math.max(1,y.height>>$);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,$,Tt,Et,Ot,y.depth,0,Pt,pt,null):e.texImage2D(tt,$,Tt,Et,Ot,0,Pt,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Gt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,tt,at.__webglTexture,0,Bt(y)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,tt,at.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(A,y,G){if(s.bindRenderbuffer(s.RENDERBUFFER,A),y.depthBuffer){const J=y.depthTexture,tt=J&&J.isDepthTexture?J.type:null,$=x(y.stencilBuffer,tt),Pt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=Bt(y);Gt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,$,y.width,y.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,$,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,$,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pt,s.RENDERBUFFER,A)}else{const J=y.textures;for(let tt=0;tt<J.length;tt++){const $=J[tt],Pt=a.convert($.format,$.colorSpace),pt=a.convert($.type),Tt=T($.internalFormat,Pt,pt,$.colorSpace),Jt=Bt(y);G&&Gt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,Tt,y.width,y.height):Gt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,Tt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Tt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(y.depthTexture);J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);const tt=J.__webglTexture,$=Bt(y);if(y.depthTexture.format===li)Gt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(y.depthTexture.format===mi)Gt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function ht(A){const y=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){const tt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),y.__depthDisposeCallback=tt}y.__boundDepthTexture=J}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");At(y.__webglFramebuffer,A)}else if(G){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=s.createRenderbuffer(),rt(y.__webglDepthbuffer[J],A,!1);else{const tt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,$)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),rt(y.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,tt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(A,y,G){const J=n.get(A);y!==void 0&&ut(J.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&ht(A)}function vt(A){const y=A.texture,G=n.get(A),J=n.get(y);A.addEventListener("dispose",P);const tt=A.textures,$=A.isWebGLCubeRenderTarget===!0,Pt=tt.length>1;if(Pt||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=y.version,r.memory.textures++),$){G.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[pt]=[];for(let Tt=0;Tt<y.mipmaps.length;Tt++)G.__webglFramebuffer[pt][Tt]=s.createFramebuffer()}else G.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let pt=0;pt<y.mipmaps.length;pt++)G.__webglFramebuffer[pt]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Pt)for(let pt=0,Tt=tt.length;pt<Tt;pt++){const Jt=n.get(tt[pt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),r.memory.textures++)}if(A.samples>0&&Gt(A)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pt=0;pt<tt.length;pt++){const Tt=tt[pt];G.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[pt]);const Jt=a.convert(Tt.format,Tt.colorSpace),at=a.convert(Tt.type),Et=T(Tt.internalFormat,Jt,at,Tt.colorSpace,A.isXRRenderTarget===!0),Ot=Bt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,Et,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,G.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Ut(s.TEXTURE_CUBE_MAP,y);for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Tt=0;Tt<y.mipmaps.length;Tt++)ut(G.__webglFramebuffer[pt][Tt],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Tt);else ut(G.__webglFramebuffer[pt],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);f(y)&&h(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let pt=0,Tt=tt.length;pt<Tt;pt++){const Jt=tt[pt],at=n.get(Jt);e.bindTexture(s.TEXTURE_2D,at.__webglTexture),Ut(s.TEXTURE_2D,Jt),ut(G.__webglFramebuffer,A,Jt,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),f(Jt)&&h(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,J.__webglTexture),Ut(pt,y),y.mipmaps&&y.mipmaps.length>0)for(let Tt=0;Tt<y.mipmaps.length;Tt++)ut(G.__webglFramebuffer[Tt],A,y,s.COLOR_ATTACHMENT0,pt,Tt);else ut(G.__webglFramebuffer,A,y,s.COLOR_ATTACHMENT0,pt,0);f(y)&&h(pt),e.unbindTexture()}A.depthBuffer&&ht(A)}function It(A){const y=A.textures;for(let G=0,J=y.length;G<J;G++){const tt=y[G];if(f(tt)){const $=S(A),Pt=n.get(tt).__webglTexture;e.bindTexture($,Pt),h($),e.unbindTexture()}}}const Ft=[],U=[];function re(A){if(A.samples>0){if(Gt(A)===!1){const y=A.textures,G=A.width,J=A.height;let tt=s.COLOR_BUFFER_BIT;const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pt=n.get(A),pt=y.length>1;if(pt)for(let Tt=0;Tt<y.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Tt=0;Tt<y.length;Tt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),pt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[Tt]);const Jt=n.get(y[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,G,J,0,0,G,J,tt,s.NEAREST),c===!0&&(Ft.length=0,U.length=0,Ft.push(s.COLOR_ATTACHMENT0+Tt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ft.push($),U.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ft))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let Tt=0;Tt<y.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[Tt]);const Jt=n.get(y[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Bt(A){return Math.min(i.maxSamples,A.samples)}function Gt(A){const y=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Mt(A){const y=r.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function Kt(A,y){const G=A.colorSpace,J=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==_i&&G!==Tn&&(te.getTransfer(G)===ce?(J!==Ke||tt!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function wt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=k,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=st,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Gt}function jf(s,t){function e(n,i=Tn){let a;const r=te.getTransfer(i);if(n===fn)return s.UNSIGNED_BYTE;if(n===Ba)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ka)return s.UNSIGNED_SHORT_5_5_5_1;if(n===fo)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ho)return s.BYTE;if(n===uo)return s.SHORT;if(n===Ii)return s.UNSIGNED_SHORT;if(n===Oa)return s.INT;if(n===Hn)return s.UNSIGNED_INT;if(n===hn)return s.FLOAT;if(n===Ni)return s.HALF_FLOAT;if(n===po)return s.ALPHA;if(n===mo)return s.RGB;if(n===Ke)return s.RGBA;if(n===go)return s.LUMINANCE;if(n===_o)return s.LUMINANCE_ALPHA;if(n===li)return s.DEPTH_COMPONENT;if(n===mi)return s.DEPTH_STENCIL;if(n===xo)return s.RED;if(n===za)return s.RED_INTEGER;if(n===vo)return s.RG;if(n===Ga)return s.RG_INTEGER;if(n===Ha)return s.RGBA_INTEGER;if(n===cs||n===ls||n===hs||n===us)if(r===ce)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===cs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===cs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ls)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===us)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===la||n===ha||n===ua||n===da)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===la)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ha)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ua)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===da)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fa||n===pa||n===ma)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===fa||n===pa)return r===ce?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ma)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ga||n===_a||n===xa||n===va||n===Ma||n===ya||n===Sa||n===wa||n===Ta||n===Ea||n===ba||n===Aa||n===Pa||n===Ra)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===ga)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_a)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xa)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===va)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ma)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ya)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sa)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ta)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ea)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ba)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Aa)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pa)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ra)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ds||n===Ca||n===Da)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===ds)return r===ce?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ca)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mo||n===Ia||n===La||n===Ua)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===ds)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ia)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===La)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ua)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class $f extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class St extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jf={type:"move"};class Ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const g of t.hand.values()){const f=e.getJointPose(g,n),h=this._getHandJoint(l,g);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=.02,_=.005;l.inputState.pinching&&p>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jf)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new St;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Qf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ep{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ce,a=t.properties.get(i);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pn({vertexShader:Qf,fragmentShader:tp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new E(new ae(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class np extends xi{constructor(t,e){super();const n=this;let i=null,a=1,r=null,o="local-floor",c=1,l=null,u=null,d=null,p=null,m=null,_=null;const g=new ep,f=e.getContextAttributes();let h=null,S=null;const T=[],x=[],D=new Zt;let b=null;const P=new Fe;P.viewport=new le;const C=new Fe;C.viewport=new le;const v=[P,C],M=new $f;let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Y=T[B];return Y===void 0&&(Y=new Ys,T[B]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(B){let Y=T[B];return Y===void 0&&(Y=new Ys,T[B]=Y),Y.getGripSpace()},this.getHand=function(B){let Y=T[B];return Y===void 0&&(Y=new Ys,T[B]=Y),Y.getHandSpace()};function I(B){const Y=x.indexOf(B.inputSource);if(Y===-1)return;const ut=T[Y];ut!==void 0&&(ut.update(B.inputSource,B.frame,l||r),ut.dispatchEvent({type:B.type,data:B.inputSource}))}function H(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",z);for(let B=0;B<T.length;B++){const Y=x[B];Y!==null&&(x[B]=null,T[B].disconnect(Y))}R=null,k=null,g.reset(),t.setRenderTarget(h),m=null,p=null,d=null,i=null,S=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(h=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",H),i.addEventListener("inputsourceschange",z),f.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(D),i.renderState.layers===void 0){const Y={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(i,e,Y),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Vn(m.framebufferWidth,m.framebufferHeight,{format:Ke,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let Y=null,ut=null,rt=null;f.depth&&(rt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=f.stencil?mi:li,ut=f.stencil?pi:Hn);const At={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:a};d=new XRWebGLBinding(i,e),p=d.createProjectionLayer(At),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),S=new Vn(p.textureWidth,p.textureHeight,{format:Ke,type:fn,depthTexture:new No(p.textureWidth,p.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),lt.setContext(i),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(B){for(let Y=0;Y<B.removed.length;Y++){const ut=B.removed[Y],rt=x.indexOf(ut);rt>=0&&(x[rt]=null,T[rt].disconnect(ut))}for(let Y=0;Y<B.added.length;Y++){const ut=B.added[Y];let rt=x.indexOf(ut);if(rt===-1){for(let ht=0;ht<T.length;ht++)if(ht>=x.length){x.push(ut),rt=ht;break}else if(x[ht]===null){x[ht]=ut,rt=ht;break}if(rt===-1)break}const At=T[rt];At&&At.connect(ut)}}const q=new L,j=new L;function V(B,Y,ut){q.setFromMatrixPosition(Y.matrixWorld),j.setFromMatrixPosition(ut.matrixWorld);const rt=q.distanceTo(j),At=Y.projectionMatrix.elements,ht=ut.projectionMatrix.elements,st=At[14]/(At[10]-1),vt=At[14]/(At[10]+1),It=(At[9]+1)/At[5],Ft=(At[9]-1)/At[5],U=(At[8]-1)/At[0],re=(ht[8]+1)/ht[0],Bt=st*U,Gt=st*re,Mt=rt/(-U+re),Kt=Mt*-U;if(Y.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Kt),B.translateZ(Mt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),At[10]===-1)B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const wt=st+Mt,A=vt+Mt,y=Bt-Kt,G=Gt+(rt-Kt),J=It*vt/A*wt,tt=Ft*vt/A*wt;B.projectionMatrix.makePerspective(y,G,J,tt,wt,A),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function it(B,Y){Y===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Y.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;let Y=B.near,ut=B.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(ut=g.depthFar)),M.near=C.near=P.near=Y,M.far=C.far=P.far=ut,(R!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,k=M.far),P.layers.mask=B.layers.mask|2,C.layers.mask=B.layers.mask|4,M.layers.mask=P.layers.mask|C.layers.mask;const rt=B.parent,At=M.cameras;it(M,rt);for(let ht=0;ht<At.length;ht++)it(At[ht],rt);At.length===2?V(M,P,C):M.projectionMatrix.copy(P.projectionMatrix),nt(B,M,rt)};function nt(B,Y,ut){ut===null?B.matrix.copy(Y.matrixWorld):(B.matrix.copy(ut.matrixWorld),B.matrix.invert(),B.matrix.multiply(Y.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Li*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(B){c=B,p!==null&&(p.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let dt=null;function Ut(B,Y){if(u=Y.getViewerPose(l||r),_=Y,u!==null){const ut=u.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let rt=!1;ut.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let ht=0;ht<ut.length;ht++){const st=ut[ht];let vt=null;if(m!==null)vt=m.getViewport(st);else{const Ft=d.getViewSubImage(p,st);vt=Ft.viewport,ht===0&&(t.setRenderTargetTextures(S,Ft.colorTexture,p.ignoreDepthValues?void 0:Ft.depthStencilTexture),t.setRenderTarget(S))}let It=v[ht];It===void 0&&(It=new Fe,It.layers.enable(ht),It.viewport=new le,v[ht]=It),It.matrix.fromArray(st.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(st.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(vt.x,vt.y,vt.width,vt.height),ht===0&&(M.matrix.copy(It.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(It)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){const ht=d.getDepthInformation(ut[0]);ht&&ht.isValid&&ht.texture&&g.init(t,ht,i.renderState)}}for(let ut=0;ut<T.length;ut++){const rt=x[ut],At=T[ut];rt!==null&&At!==void 0&&At.update(rt,Y,l||r)}dt&&dt(B,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),_=null}const lt=new Lo;lt.setAnimationLoop(Ut),this.setAnimationLoop=function(B){dt=B},this.dispose=function(){}}}const Nn=new tn,ip=new pe;function sp(s,t){function e(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,Co(s)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function i(f,h,S,T,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(f,h):h.isMeshToonMaterial?(a(f,h),d(f,h)):h.isMeshPhongMaterial?(a(f,h),u(f,h)):h.isMeshStandardMaterial?(a(f,h),p(f,h),h.isMeshPhysicalMaterial&&m(f,h,x)):h.isMeshMatcapMaterial?(a(f,h),_(f,h)):h.isMeshDepthMaterial?a(f,h):h.isMeshDistanceMaterial?(a(f,h),g(f,h)):h.isMeshNormalMaterial?a(f,h):h.isLineBasicMaterial?(r(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?c(f,h,S,T):h.isSpriteMaterial?l(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,e(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Ie&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,e(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Ie&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,e(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,e(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const S=t.get(h),T=S.envMap,x=S.envMapRotation;T&&(f.envMap.value=T,Nn.copy(x),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),f.envMapRotation.value.setFromMatrix4(ip.makeRotationFromEuler(Nn)),f.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,f.aoMapTransform))}function r(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function c(f,h,S,T){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*S,f.scale.value=T*.5,h.map&&(f.map.value=h.map,e(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function l(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function d(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function p(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,S){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ie&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,h){h.matcap&&(f.matcap.value=h.matcap)}function g(f,h){const S=t.get(h).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ap(s,t,e,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,T){const x=T.program;n.uniformBlockBinding(S,x)}function l(S,T){let x=i[S.id];x===void 0&&(_(S),x=u(S),i[S.id]=x,S.addEventListener("dispose",f));const D=T.program;n.updateUBOMapping(S,D);const b=t.render.frame;a[S.id]!==b&&(p(S),a[S.id]=b)}function u(S){const T=d();S.__bindingPointIndex=T;const x=s.createBuffer(),D=S.__size,b=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,D,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,x),x}function d(){for(let S=0;S<o;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){const T=i[S.id],x=S.uniforms,D=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let b=0,P=x.length;b<P;b++){const C=Array.isArray(x[b])?x[b]:[x[b]];for(let v=0,M=C.length;v<M;v++){const R=C[v];if(m(R,b,v,D)===!0){const k=R.__offset,I=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let z=0;z<I.length;z++){const q=I[z],j=g(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,k+H,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(S,T,x,D){const b=S.value,P=T+"_"+x;if(D[P]===void 0)return typeof b=="number"||typeof b=="boolean"?D[P]=b:D[P]=b.clone(),!0;{const C=D[P];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return D[P]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function _(S){const T=S.uniforms;let x=0;const D=16;for(let P=0,C=T.length;P<C;P++){const v=Array.isArray(T[P])?T[P]:[T[P]];for(let M=0,R=v.length;M<R;M++){const k=v[M],I=Array.isArray(k.value)?k.value:[k.value];for(let H=0,z=I.length;H<z;H++){const q=I[H],j=g(q),V=x%D,it=V%j.boundary,nt=V+it;x+=it,nt!==0&&D-nt<j.storage&&(x+=D-nt),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=j.storage}}}const b=x%D;return b>0&&(x+=D-b),S.__size=x,S.__cache={},this}function g(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),T}function f(S){const T=S.target;T.removeEventListener("dispose",f);const x=r.indexOf(T.__bindingPointIndex);r.splice(x,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete a[T.id]}function h(){for(const S in i)s.deleteBuffer(i[S]);r=[],i={},a={}}return{bind:c,update:l,dispose:h}}class rp{constructor(t={}){const{canvas:e=qc(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;const _=new Uint32Array(4),g=new Int32Array(4);let f=null,h=null;const S=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=bn,this.toneMappingExposure=1;const x=this;let D=!1,b=0,P=0,C=null,v=-1,M=null;const R=new le,k=new le;let I=null;const H=new $t(0);let z=0,q=e.width,j=e.height,V=1,it=null,nt=null;const dt=new le(0,0,q,j),Ut=new le(0,0,q,j);let lt=!1;const B=new Xa;let Y=!1,ut=!1;const rt=new pe,At=new pe,ht=new L,st=new le,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function Ft(){return C===null?V:1}let U=n;function re(w,F){return e.getContext(w,F)}try{const w={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fa}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),U===null){const F="webgl2";if(U=re(F,w),U===null)throw re(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Bt,Gt,Mt,Kt,wt,A,y,G,J,tt,$,Pt,pt,Tt,Jt,at,Et,Ot,kt,bt,jt,qt,he,N;function mt(){Bt=new hd(U),Bt.init(),qt=new jf(U,Bt),Gt=new sd(U,Bt,t,qt),Mt=new Yf(U,Bt),Gt.reverseDepthBuffer&&p&&Mt.buffers.depth.setReversed(!0),Kt=new fd(U),wt=new If,A=new Zf(U,Bt,Mt,wt,Gt,qt,Kt),y=new rd(x),G=new ld(x),J=new Ml(U),he=new nd(U,J),tt=new ud(U,J,Kt,he),$=new md(U,tt,J,Kt),kt=new pd(U,Gt,A),at=new ad(wt),Pt=new Df(x,y,G,Bt,Gt,he,at),pt=new sp(x,wt),Tt=new Uf,Jt=new zf(Bt),Ot=new ed(x,y,G,Mt,$,m,c),Et=new Xf(x,$,Gt),N=new ap(U,Kt,Gt,Mt),bt=new id(U,Bt,Kt),jt=new dd(U,Bt,Kt),Kt.programs=Pt.programs,x.capabilities=Gt,x.extensions=Bt,x.properties=wt,x.renderLists=Tt,x.shadowMap=Et,x.state=Mt,x.info=Kt}mt();const Z=new np(x,U);this.xr=Z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=Bt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Bt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(q,j,!1))},this.getSize=function(w){return w.set(q,j)},this.setSize=function(w,F,W=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,j=F,e.width=Math.floor(w*V),e.height=Math.floor(F*V),W===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(q*V,j*V).floor()},this.setDrawingBufferSize=function(w,F,W){q=w,j=F,V=W,e.width=Math.floor(w*W),e.height=Math.floor(F*W),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(dt)},this.setViewport=function(w,F,W,X){w.isVector4?dt.set(w.x,w.y,w.z,w.w):dt.set(w,F,W,X),Mt.viewport(R.copy(dt).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(Ut)},this.setScissor=function(w,F,W,X){w.isVector4?Ut.set(w.x,w.y,w.z,w.w):Ut.set(w,F,W,X),Mt.scissor(k.copy(Ut).multiplyScalar(V).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(w){Mt.setScissorTest(lt=w)},this.setOpaqueSort=function(w){it=w},this.setTransparentSort=function(w){nt=w},this.getClearColor=function(w){return w.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(w=!0,F=!0,W=!0){let X=0;if(w){let O=!1;if(C!==null){const ot=C.texture.format;O=ot===Ha||ot===Ga||ot===za}if(O){const ot=C.texture.type,_t=ot===fn||ot===Hn||ot===Ii||ot===pi||ot===Ba||ot===ka,Rt=Ot.getClearColor(),Ct=Ot.getClearAlpha(),zt=Rt.r,Vt=Rt.g,Dt=Rt.b;_t?(_[0]=zt,_[1]=Vt,_[2]=Dt,_[3]=Ct,U.clearBufferuiv(U.COLOR,0,_)):(g[0]=zt,g[1]=Vt,g[2]=Dt,g[3]=Ct,U.clearBufferiv(U.COLOR,0,g))}else X|=U.COLOR_BUFFER_BIT}F&&(X|=U.DEPTH_BUFFER_BIT),W&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Tt.dispose(),Jt.dispose(),wt.dispose(),y.dispose(),G.dispose(),$.dispose(),he.dispose(),N.dispose(),Pt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",ja),Z.removeEventListener("sessionend",$a),Rn.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const w=Kt.autoReset,F=Et.enabled,W=Et.autoUpdate,X=Et.needsUpdate,O=Et.type;mt(),Kt.autoReset=w,Et.enabled=F,Et.autoUpdate=W,Et.needsUpdate=X,Et.type=O}function gt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ht(w){const F=w.target;F.removeEventListener("dispose",Ht),me(F)}function me(w){Te(w),wt.remove(w)}function Te(w){const F=wt.get(w).programs;F!==void 0&&(F.forEach(function(W){Pt.releaseProgram(W)}),w.isShaderMaterial&&Pt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,W,X,O,ot){F===null&&(F=vt);const _t=O.isMesh&&O.matrixWorld.determinant()<0,Rt=Go(w,F,W,X,O);Mt.setMaterial(X,_t);let Ct=W.index,zt=1;if(X.wireframe===!0){if(Ct=tt.getWireframeAttribute(W),Ct===void 0)return;zt=2}const Vt=W.drawRange,Dt=W.attributes.position;let ee=Vt.start*zt,ue=(Vt.start+Vt.count)*zt;ot!==null&&(ee=Math.max(ee,ot.start*zt),ue=Math.min(ue,(ot.start+ot.count)*zt)),Ct!==null?(ee=Math.max(ee,0),ue=Math.min(ue,Ct.count)):Dt!=null&&(ee=Math.max(ee,0),ue=Math.min(ue,Dt.count));const de=ue-ee;if(de<0||de===1/0)return;he.setup(O,X,Rt,W,Ct);let De,ne=bt;if(Ct!==null&&(De=J.get(Ct),ne=jt,ne.setIndex(De)),O.isMesh)X.wireframe===!0?(Mt.setLineWidth(X.wireframeLinewidth*Ft()),ne.setMode(U.LINES)):ne.setMode(U.TRIANGLES);else if(O.isLine){let Lt=X.linewidth;Lt===void 0&&(Lt=1),Mt.setLineWidth(Lt*Ft()),O.isLineSegments?ne.setMode(U.LINES):O.isLineLoop?ne.setMode(U.LINE_LOOP):ne.setMode(U.LINE_STRIP)}else O.isPoints?ne.setMode(U.POINTS):O.isSprite&&ne.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ne.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))ne.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Lt=O._multiDrawStarts,nn=O._multiDrawCounts,ie=O._multiDrawCount,He=Ct?J.get(Ct).bytesPerElement:1,Xn=wt.get(X).currentProgram.getUniforms();for(let Le=0;Le<ie;Le++)Xn.setValue(U,"_gl_DrawID",Le),ne.render(Lt[Le]/He,nn[Le])}else if(O.isInstancedMesh)ne.renderInstances(ee,de,O.count);else if(W.isInstancedBufferGeometry){const Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,nn=Math.min(W.instanceCount,Lt);ne.renderInstances(ee,de,nn)}else ne.render(ee,de)};function se(w,F,W){w.transparent===!0&&w.side===qe&&w.forceSinglePass===!1?(w.side=Ie,w.needsUpdate=!0,ki(w,F,W),w.side=An,w.needsUpdate=!0,ki(w,F,W),w.side=qe):ki(w,F,W)}this.compile=function(w,F,W=null){W===null&&(W=w),h=Jt.get(W),h.init(F),T.push(h),W.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),w!==W&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();const X=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ot=O.material;if(ot)if(Array.isArray(ot))for(let _t=0;_t<ot.length;_t++){const Rt=ot[_t];se(Rt,W,O),X.add(Rt)}else se(ot,W,O),X.add(ot)}),T.pop(),h=null,X},this.compileAsync=function(w,F,W=null){const X=this.compile(w,F,W);return new Promise(O=>{function ot(){if(X.forEach(function(_t){wt.get(_t).currentProgram.isReady()&&X.delete(_t)}),X.size===0){O(w);return}setTimeout(ot,10)}Bt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Ge=null;function en(w){Ge&&Ge(w)}function ja(){Rn.stop()}function $a(){Rn.start()}const Rn=new Lo;Rn.setAnimationLoop(en),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(w){Ge=w,Z.setAnimationLoop(w),w===null?Rn.stop():Rn.start()},Z.addEventListener("sessionstart",ja),Z.addEventListener("sessionend",$a),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,F,C),h=Jt.get(w,T.length),h.init(F),T.push(h),At.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),B.setFromProjectionMatrix(At),ut=this.localClippingEnabled,Y=at.init(this.clippingPlanes,ut),f=Tt.get(w,S.length),f.init(),S.push(f),Z.enabled===!0&&Z.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&vs(ot,F,-1/0,x.sortObjects)}vs(w,F,0,x.sortObjects),f.finish(),x.sortObjects===!0&&f.sort(it,nt),It=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,It&&Ot.addToRenderList(f,w),this.info.render.frame++,Y===!0&&at.beginShadows();const W=h.state.shadowsArray;Et.render(W,w,F),Y===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=f.opaque,O=f.transmissive;if(h.setupLights(),F.isArrayCamera){const ot=F.cameras;if(O.length>0)for(let _t=0,Rt=ot.length;_t<Rt;_t++){const Ct=ot[_t];Qa(X,O,w,Ct)}It&&Ot.render(w);for(let _t=0,Rt=ot.length;_t<Rt;_t++){const Ct=ot[_t];Ja(f,w,Ct,Ct.viewport)}}else O.length>0&&Qa(X,O,w,F),It&&Ot.render(w),Ja(f,w,F);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(x,w,F),he.resetDefaultState(),v=-1,M=null,T.pop(),T.length>0?(h=T[T.length-1],Y===!0&&at.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,S.pop(),S.length>0?f=S[S.length-1]:f=null};function vs(w,F,W,X){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||B.intersectsSprite(w)){X&&st.setFromMatrixPosition(w.matrixWorld).applyMatrix4(At);const _t=$.update(w),Rt=w.material;Rt.visible&&f.push(w,_t,Rt,W,st.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||B.intersectsObject(w))){const _t=$.update(w),Rt=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),st.copy(w.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),st.copy(_t.boundingSphere.center)),st.applyMatrix4(w.matrixWorld).applyMatrix4(At)),Array.isArray(Rt)){const Ct=_t.groups;for(let zt=0,Vt=Ct.length;zt<Vt;zt++){const Dt=Ct[zt],ee=Rt[Dt.materialIndex];ee&&ee.visible&&f.push(w,_t,ee,W,st.z,Dt)}}else Rt.visible&&f.push(w,_t,Rt,W,st.z,null)}}const ot=w.children;for(let _t=0,Rt=ot.length;_t<Rt;_t++)vs(ot[_t],F,W,X)}function Ja(w,F,W,X){const O=w.opaque,ot=w.transmissive,_t=w.transparent;h.setupLightsView(W),Y===!0&&at.setGlobalState(x.clippingPlanes,W),X&&Mt.viewport(R.copy(X)),O.length>0&&Bi(O,F,W),ot.length>0&&Bi(ot,F,W),_t.length>0&&Bi(_t,F,W),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Qa(w,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[X.id]===void 0&&(h.state.transmissionRenderTarget[X.id]=new Vn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Ni:fn,minFilter:Gn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const ot=h.state.transmissionRenderTarget[X.id],_t=X.viewport||R;ot.setSize(_t.z,_t.w);const Rt=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(H),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),It&&Ot.render(W);const Ct=x.toneMapping;x.toneMapping=bn;const zt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),h.setupLightsView(X),Y===!0&&at.setGlobalState(x.clippingPlanes,X),Bi(w,W,X),A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Dt=0,ee=F.length;Dt<ee;Dt++){const ue=F[Dt],de=ue.object,De=ue.geometry,ne=ue.material,Lt=ue.group;if(ne.side===qe&&de.layers.test(X.layers)){const nn=ne.side;ne.side=Ie,ne.needsUpdate=!0,tr(de,W,X,De,ne,Lt),ne.side=nn,ne.needsUpdate=!0,Vt=!0}}Vt===!0&&(A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot))}x.setRenderTarget(Rt),x.setClearColor(H,z),zt!==void 0&&(X.viewport=zt),x.toneMapping=Ct}function Bi(w,F,W){const X=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ot=w.length;O<ot;O++){const _t=w[O],Rt=_t.object,Ct=_t.geometry,zt=X===null?_t.material:X,Vt=_t.group;Rt.layers.test(W.layers)&&tr(Rt,F,W,Ct,zt,Vt)}}function tr(w,F,W,X,O,ot){w.onBeforeRender(x,F,W,X,O,ot),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(x,F,W,X,w,ot),O.transparent===!0&&O.side===qe&&O.forceSinglePass===!1?(O.side=Ie,O.needsUpdate=!0,x.renderBufferDirect(W,F,X,O,w,ot),O.side=An,O.needsUpdate=!0,x.renderBufferDirect(W,F,X,O,w,ot),O.side=qe):x.renderBufferDirect(W,F,X,O,w,ot),w.onAfterRender(x,F,W,X,O,ot)}function ki(w,F,W){F.isScene!==!0&&(F=vt);const X=wt.get(w),O=h.state.lights,ot=h.state.shadowsArray,_t=O.state.version,Rt=Pt.getParameters(w,O.state,ot,F,W),Ct=Pt.getProgramCacheKey(Rt);let zt=X.programs;X.environment=w.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(w.isMeshStandardMaterial?G:y).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,zt===void 0&&(w.addEventListener("dispose",Ht),zt=new Map,X.programs=zt);let Vt=zt.get(Ct);if(Vt!==void 0){if(X.currentProgram===Vt&&X.lightsStateVersion===_t)return nr(w,Rt),Vt}else Rt.uniforms=Pt.getUniforms(w),w.onBeforeCompile(Rt,x),Vt=Pt.acquireProgram(Rt,Ct),zt.set(Ct,Vt),X.uniforms=Rt.uniforms;const Dt=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Dt.clippingPlanes=at.uniform),nr(w,Rt),X.needsLights=Vo(w),X.lightsStateVersion=_t,X.needsLights&&(Dt.ambientLightColor.value=O.state.ambient,Dt.lightProbe.value=O.state.probe,Dt.directionalLights.value=O.state.directional,Dt.directionalLightShadows.value=O.state.directionalShadow,Dt.spotLights.value=O.state.spot,Dt.spotLightShadows.value=O.state.spotShadow,Dt.rectAreaLights.value=O.state.rectArea,Dt.ltc_1.value=O.state.rectAreaLTC1,Dt.ltc_2.value=O.state.rectAreaLTC2,Dt.pointLights.value=O.state.point,Dt.pointLightShadows.value=O.state.pointShadow,Dt.hemisphereLights.value=O.state.hemi,Dt.directionalShadowMap.value=O.state.directionalShadowMap,Dt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Dt.spotShadowMap.value=O.state.spotShadowMap,Dt.spotLightMatrix.value=O.state.spotLightMatrix,Dt.spotLightMap.value=O.state.spotLightMap,Dt.pointShadowMap.value=O.state.pointShadowMap,Dt.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Vt,X.uniformsList=null,Vt}function er(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=fs.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function nr(w,F){const W=wt.get(w);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Go(w,F,W,X,O){F.isScene!==!0&&(F=vt),A.resetTextureUnits();const ot=F.fog,_t=X.isMeshStandardMaterial?F.environment:null,Rt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:_i,Ct=(X.isMeshStandardMaterial?G:y).get(X.envMap||_t),zt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Vt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Dt=!!W.morphAttributes.position,ee=!!W.morphAttributes.normal,ue=!!W.morphAttributes.color;let de=bn;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(de=x.toneMapping);const De=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ne=De!==void 0?De.length:0,Lt=wt.get(X),nn=h.state.lights;if(Y===!0&&(ut===!0||w!==M)){const Oe=w===M&&X.id===v;at.setState(X,w,Oe)}let ie=!1;X.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==nn.state.version||Lt.outputColorSpace!==Rt||O.isBatchedMesh&&Lt.batching===!1||!O.isBatchedMesh&&Lt.batching===!0||O.isBatchedMesh&&Lt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Lt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Lt.instancing===!1||!O.isInstancedMesh&&Lt.instancing===!0||O.isSkinnedMesh&&Lt.skinning===!1||!O.isSkinnedMesh&&Lt.skinning===!0||O.isInstancedMesh&&Lt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Lt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Lt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Lt.instancingMorph===!1&&O.morphTexture!==null||Lt.envMap!==Ct||X.fog===!0&&Lt.fog!==ot||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==at.numPlanes||Lt.numIntersection!==at.numIntersection)||Lt.vertexAlphas!==zt||Lt.vertexTangents!==Vt||Lt.morphTargets!==Dt||Lt.morphNormals!==ee||Lt.morphColors!==ue||Lt.toneMapping!==de||Lt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Lt.__version=X.version);let He=Lt.currentProgram;ie===!0&&(He=ki(X,F,O));let Xn=!1,Le=!1,yi=!1;const fe=He.getUniforms(),je=Lt.uniforms;if(Mt.useProgram(He.program)&&(Xn=!0,Le=!0,yi=!0),X.id!==v&&(v=X.id,Le=!0),Xn||M!==w){Mt.buffers.depth.getReversed()?(rt.copy(w.projectionMatrix),Kc(rt),Zc(rt),fe.setValue(U,"projectionMatrix",rt)):fe.setValue(U,"projectionMatrix",w.projectionMatrix),fe.setValue(U,"viewMatrix",w.matrixWorldInverse);const pn=fe.map.cameraPosition;pn!==void 0&&pn.setValue(U,ht.setFromMatrixPosition(w.matrixWorld)),Gt.logarithmicDepthBuffer&&fe.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&fe.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Le=!0,yi=!0)}if(O.isSkinnedMesh){fe.setOptional(U,O,"bindMatrix"),fe.setOptional(U,O,"bindMatrixInverse");const Oe=O.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),fe.setValue(U,"boneTexture",Oe.boneTexture,A))}O.isBatchedMesh&&(fe.setOptional(U,O,"batchingTexture"),fe.setValue(U,"batchingTexture",O._matricesTexture,A),fe.setOptional(U,O,"batchingIdTexture"),fe.setValue(U,"batchingIdTexture",O._indirectTexture,A),fe.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&fe.setValue(U,"batchingColorTexture",O._colorsTexture,A));const Si=W.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&kt.update(O,W,He),(Le||Lt.receiveShadow!==O.receiveShadow)&&(Lt.receiveShadow=O.receiveShadow,fe.setValue(U,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(je.envMap.value=Ct,je.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(je.envMapIntensity.value=F.environmentIntensity),Le&&(fe.setValue(U,"toneMappingExposure",x.toneMappingExposure),Lt.needsLights&&Ho(je,yi),ot&&X.fog===!0&&pt.refreshFogUniforms(je,ot),pt.refreshMaterialUniforms(je,X,V,j,h.state.transmissionRenderTarget[w.id]),fs.upload(U,er(Lt),je,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(fs.upload(U,er(Lt),je,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&fe.setValue(U,"center",O.center),fe.setValue(U,"modelViewMatrix",O.modelViewMatrix),fe.setValue(U,"normalMatrix",O.normalMatrix),fe.setValue(U,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Oe=X.uniformsGroups;for(let pn=0,mn=Oe.length;pn<mn;pn++){const ir=Oe[pn];N.update(ir,He),N.bind(ir,He)}}return He}function Ho(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Vo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,F,W){wt.get(w.texture).__webglTexture=F,wt.get(w.depthTexture).__webglTexture=W;const X=wt.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const W=wt.get(w);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,W=0){C=w,b=F,P=W;let X=!0,O=null,ot=!1,_t=!1;if(w){const Ct=wt.get(w);if(Ct.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(U.FRAMEBUFFER,null),X=!1;else if(Ct.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Ct.__hasExternalTextures)A.rebindTextures(w,wt.get(w.texture).__webglTexture,wt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Dt=w.depthTexture;if(Ct.__boundDepthTexture!==Dt){if(Dt!==null&&wt.has(Dt)&&(w.width!==Dt.image.width||w.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const zt=w.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(_t=!0);const Vt=wt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Vt[F])?O=Vt[F][W]:O=Vt[F],ot=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?O=wt.get(w).__webglMultisampledFramebuffer:Array.isArray(Vt)?O=Vt[W]:O=Vt,R.copy(w.viewport),k.copy(w.scissor),I=w.scissorTest}else R.copy(dt).multiplyScalar(V).floor(),k.copy(Ut).multiplyScalar(V).floor(),I=lt;if(Mt.bindFramebuffer(U.FRAMEBUFFER,O)&&X&&Mt.drawBuffers(w,O),Mt.viewport(R),Mt.scissor(k),Mt.setScissorTest(I),ot){const Ct=wt.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ct.__webglTexture,W)}else if(_t){const Ct=wt.get(w.texture),zt=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.__webglTexture,W||0,zt)}v=-1},this.readRenderTargetPixels=function(w,F,W,X,O,ot,_t){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(Rt=Rt[_t]),Rt){Mt.bindFramebuffer(U.FRAMEBUFFER,Rt);try{const Ct=w.texture,zt=Ct.format,Vt=Ct.type;if(!Gt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-X&&W>=0&&W<=w.height-O&&U.readPixels(F,W,X,O,qt.convert(zt),qt.convert(Vt),ot)}finally{const Ct=C!==null?wt.get(C).__webglFramebuffer:null;Mt.bindFramebuffer(U.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(w,F,W,X,O,ot,_t){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(Rt=Rt[_t]),Rt){const Ct=w.texture,zt=Ct.format,Vt=Ct.type;if(!Gt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-X&&W>=0&&W<=w.height-O){Mt.bindFramebuffer(U.FRAMEBUFFER,Rt);const Dt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Dt),U.bufferData(U.PIXEL_PACK_BUFFER,ot.byteLength,U.STREAM_READ),U.readPixels(F,W,X,O,qt.convert(zt),qt.convert(Vt),0);const ee=C!==null?wt.get(C).__webglFramebuffer:null;Mt.bindFramebuffer(U.FRAMEBUFFER,ee);const ue=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Yc(U,ue,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Dt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ot),U.deleteBuffer(Dt),U.deleteSync(ue),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,W=0){w.isTexture!==!0&&(Pi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-W),O=Math.floor(w.image.width*X),ot=Math.floor(w.image.height*X),_t=F!==null?F.x:0,Rt=F!==null?F.y:0;A.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,_t,Rt,O,ot),Mt.unbindTexture()},this.copyTextureToTexture=function(w,F,W=null,X=null,O=0){w.isTexture!==!0&&(Pi("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],F=arguments[2],O=arguments[3]||0,W=null);let ot,_t,Rt,Ct,zt,Vt,Dt,ee,ue;const de=w.isCompressedTexture?w.mipmaps[O]:w.image;W!==null?(ot=W.max.x-W.min.x,_t=W.max.y-W.min.y,Rt=W.isBox3?W.max.z-W.min.z:1,Ct=W.min.x,zt=W.min.y,Vt=W.isBox3?W.min.z:0):(ot=de.width,_t=de.height,Rt=de.depth||1,Ct=0,zt=0,Vt=0),X!==null?(Dt=X.x,ee=X.y,ue=X.z):(Dt=0,ee=0,ue=0);const De=qt.convert(F.format),ne=qt.convert(F.type);let Lt;F.isData3DTexture?(A.setTexture3D(F,0),Lt=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),Lt=U.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),Lt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const nn=U.getParameter(U.UNPACK_ROW_LENGTH),ie=U.getParameter(U.UNPACK_IMAGE_HEIGHT),He=U.getParameter(U.UNPACK_SKIP_PIXELS),Xn=U.getParameter(U.UNPACK_SKIP_ROWS),Le=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,de.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,de.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ct),U.pixelStorei(U.UNPACK_SKIP_ROWS,zt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Vt);const yi=w.isDataArrayTexture||w.isData3DTexture,fe=F.isDataArrayTexture||F.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const je=wt.get(w),Si=wt.get(F),Oe=wt.get(je.__renderTarget),pn=wt.get(Si.__renderTarget);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,Oe.__webglFramebuffer),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,pn.__webglFramebuffer);for(let mn=0;mn<Rt;mn++)yi&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.get(w).__webglTexture,O,Vt+mn),w.isDepthTexture?(fe&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.get(F).__webglTexture,O,ue+mn),U.blitFramebuffer(Ct,zt,ot,_t,Dt,ee,ot,_t,U.DEPTH_BUFFER_BIT,U.NEAREST)):fe?U.copyTexSubImage3D(Lt,O,Dt,ee,ue+mn,Ct,zt,ot,_t):U.copyTexSubImage2D(Lt,O,Dt,ee,ue+mn,Ct,zt,ot,_t);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else fe?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Lt,O,Dt,ee,ue,ot,_t,Rt,De,ne,de.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Lt,O,Dt,ee,ue,ot,_t,Rt,De,de.data):U.texSubImage3D(Lt,O,Dt,ee,ue,ot,_t,Rt,De,ne,de):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,Dt,ee,ot,_t,De,ne,de.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,Dt,ee,de.width,de.height,De,de.data):U.texSubImage2D(U.TEXTURE_2D,O,Dt,ee,ot,_t,De,ne,de);U.pixelStorei(U.UNPACK_ROW_LENGTH,nn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ie),U.pixelStorei(U.UNPACK_SKIP_PIXELS,He),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Le),O===0&&F.generateMipmaps&&U.generateMipmap(Lt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(w,F,W=null,X=null,O=0){return w.isTexture!==!0&&(Pi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,w=arguments[2],F=arguments[3],O=arguments[4]||0),Pi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,W,X,O)},this.initRenderTarget=function(w){wt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Mt.unbindTexture()},this.resetState=function(){b=0,P=0,C=null,Mt.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class Ya{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new $t(t),this.density=e}clone(){return new Ya(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class op extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sn extends Ce{constructor(t,e,n,i,a,r,o,c,l){super(t,e,n,i,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wn extends ze{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const a=[],r=[],o=[],c=[],l=new L,u=new Zt;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){const m=n+d/e*i;l.x=t*Math.cos(m),l.y=t*Math.sin(m),r.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(r[p]/t+1)/2,u.y=(r[p+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(o,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class yt extends ze{constructor(t=1,e=1,n=1,i=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),a=Math.floor(a);const u=[],d=[],p=[],m=[];let _=0;const g=[],f=n/2;let h=0;S(),r===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new ge(d,3)),this.setAttribute("normal",new ge(p,3)),this.setAttribute("uv",new ge(m,2));function S(){const x=new L,D=new L;let b=0;const P=(e-t)/n;for(let C=0;C<=a;C++){const v=[],M=C/a,R=M*(e-t)+t;for(let k=0;k<=i;k++){const I=k/i,H=I*c+o,z=Math.sin(H),q=Math.cos(H);D.x=R*z,D.y=-M*n+f,D.z=R*q,d.push(D.x,D.y,D.z),x.set(z,P,q).normalize(),p.push(x.x,x.y,x.z),m.push(I,1-M),v.push(_++)}g.push(v)}for(let C=0;C<i;C++)for(let v=0;v<a;v++){const M=g[v][C],R=g[v+1][C],k=g[v+1][C+1],I=g[v][C+1];(t>0||v!==0)&&(u.push(M,R,I),b+=3),(e>0||v!==a-1)&&(u.push(R,k,I),b+=3)}l.addGroup(h,b,0),h+=b}function T(x){const D=_,b=new Zt,P=new L;let C=0;const v=x===!0?t:e,M=x===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,f*M,0),p.push(0,M,0),m.push(.5,.5),_++;const R=_;for(let k=0;k<=i;k++){const H=k/i*c+o,z=Math.cos(H),q=Math.sin(H);P.x=v*q,P.y=f*M,P.z=v*z,d.push(P.x,P.y,P.z),p.push(0,M,0),b.x=z*.5+.5,b.y=q*.5*M+.5,m.push(b.x,b.y),_++}for(let k=0;k<i;k++){const I=D+k,H=R+k;x===!0?u.push(H,H+1,I):u.push(H+1,H,I),C+=3}l.addGroup(h,C,x===!0?1:2),h+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ve extends yt{constructor(t=1,e=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new ve(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ka extends ze{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const a=[],r=[];o(i),l(n),u(),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(a.slice(),3)),this.setAttribute("uv",new ge(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const T=new L,x=new L,D=new L;for(let b=0;b<e.length;b+=3)m(e[b+0],T),m(e[b+1],x),m(e[b+2],D),c(T,x,D,S)}function c(S,T,x,D){const b=D+1,P=[];for(let C=0;C<=b;C++){P[C]=[];const v=S.clone().lerp(x,C/b),M=T.clone().lerp(x,C/b),R=b-C;for(let k=0;k<=R;k++)k===0&&C===b?P[C][k]=v:P[C][k]=v.clone().lerp(M,k/R)}for(let C=0;C<b;C++)for(let v=0;v<2*(b-C)-1;v++){const M=Math.floor(v/2);v%2===0?(p(P[C][M+1]),p(P[C+1][M]),p(P[C][M])):(p(P[C][M+1]),p(P[C+1][M+1]),p(P[C+1][M]))}}function l(S){const T=new L;for(let x=0;x<a.length;x+=3)T.x=a[x+0],T.y=a[x+1],T.z=a[x+2],T.normalize().multiplyScalar(S),a[x+0]=T.x,a[x+1]=T.y,a[x+2]=T.z}function u(){const S=new L;for(let T=0;T<a.length;T+=3){S.x=a[T+0],S.y=a[T+1],S.z=a[T+2];const x=f(S)/2/Math.PI+.5,D=h(S)/Math.PI+.5;r.push(x,1-D)}_(),d()}function d(){for(let S=0;S<r.length;S+=6){const T=r[S+0],x=r[S+2],D=r[S+4],b=Math.max(T,x,D),P=Math.min(T,x,D);b>.9&&P<.1&&(T<.2&&(r[S+0]+=1),x<.2&&(r[S+2]+=1),D<.2&&(r[S+4]+=1))}}function p(S){a.push(S.x,S.y,S.z)}function m(S,T){const x=S*3;T.x=t[x+0],T.y=t[x+1],T.z=t[x+2]}function _(){const S=new L,T=new L,x=new L,D=new L,b=new Zt,P=new Zt,C=new Zt;for(let v=0,M=0;v<a.length;v+=9,M+=6){S.set(a[v+0],a[v+1],a[v+2]),T.set(a[v+3],a[v+4],a[v+5]),x.set(a[v+6],a[v+7],a[v+8]),b.set(r[M+0],r[M+1]),P.set(r[M+2],r[M+3]),C.set(r[M+4],r[M+5]),D.copy(S).add(T).add(x).divideScalar(3);const R=f(D);g(b,M+0,S,R),g(P,M+2,T,R),g(C,M+4,x,R)}}function g(S,T,x,D){D<0&&S.x===1&&(r[T]=S.x-1),x.x===0&&x.z===0&&(r[T]=D/2/Math.PI+.5)}function f(S){return Math.atan2(S.z,-S.x)}function h(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ka(t.vertices,t.indices,t.radius,t.details)}}class Ui extends Ka{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ui(t.radius,t.detail)}}class Nt extends ze{constructor(t=1,e=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const u=[],d=new L,p=new L,m=[],_=[],g=[],f=[];for(let h=0;h<=n;h++){const S=[],T=h/n;let x=0;h===0&&r===0?x=.5/e:h===n&&c===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){const b=D/e;d.x=-t*Math.cos(i+b*a)*Math.sin(r+T*o),d.y=t*Math.cos(r+T*o),d.z=t*Math.sin(i+b*a)*Math.sin(r+T*o),_.push(d.x,d.y,d.z),p.copy(d).normalize(),g.push(p.x,p.y,p.z),f.push(b+x,1-T),S.push(l++)}u.push(S)}for(let h=0;h<n;h++)for(let S=0;S<e;S++){const T=u[h][S+1],x=u[h][S],D=u[h+1][S],b=u[h+1][S+1];(h!==0||r>0)&&m.push(T,x,b),(h!==n-1||c<Math.PI)&&m.push(x,D,b)}this.setIndex(m),this.setAttribute("position",new ge(_,3)),this.setAttribute("normal",new ge(g,3)),this.setAttribute("uv",new ge(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _e extends ze{constructor(t=1,e=.4,n=12,i=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:a},n=Math.floor(n),i=Math.floor(i);const r=[],o=[],c=[],l=[],u=new L,d=new L,p=new L;for(let m=0;m<=n;m++)for(let _=0;_<=i;_++){const g=_/i*a,f=m/n*Math.PI*2;d.x=(t+e*Math.cos(f))*Math.cos(g),d.y=(t+e*Math.cos(f))*Math.sin(g),d.z=e*Math.sin(f),o.push(d.x,d.y,d.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),p.subVectors(d,u).normalize(),c.push(p.x,p.y,p.z),l.push(_/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=i;_++){const g=(i+1)*m+_-1,f=(i+1)*(m-1)+_-1,h=(i+1)*(m-1)+_,S=(i+1)*m+_;r.push(g,f,S),r.push(f,h,S)}this.setIndex(r),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class K extends Oi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Za extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class cp extends Za{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ks=new pe,io=new L,so=new L;class zo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xa,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;io.setFromMatrixPosition(t.matrixWorld),e.position.copy(io),so.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(so),e.updateMatrixWorld(),Ks.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ks),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ks)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ao=new pe,Ai=new L,Zs=new L;class lp extends zo{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Zt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ai.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ai),Zs.copy(n.position),Zs.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Zs),n.updateMatrixWorld(),i.makeTranslation(-Ai.x,-Ai.y,-Ai.z),ao.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ao)}}class os extends Za{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class hp extends zo{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class up extends Za{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new hp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fa);class dp{constructor(){this.ctx=null,this.engineOsc=null,this.engineGain=null,this.isEngineRunning=!1,this.musicPlaying=!1,this.bgmTimer=null,this.melodyTimer=null,this.isMuted=!1,this.planeAudio=null,this.whooshGain=null,this.whooshOsc=null,this.rumbleOsc=null}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t}this.ctx.state==="suspended"&&!this.isMuted&&this.ctx.resume().catch(()=>{})}toggleMute(){return this.init(),this.isMuted=!this.isMuted,this.ctx&&(this.isMuted?this.ctx.suspend():this.ctx.resume()),this.isMuted&&"speechSynthesis"in window&&window.speechSynthesis.cancel(),this.isMuted}playPlaneWhoosh(){if(!this.isMuted){try{this.planeAudio||(this.planeAudio=new Audio("/assets/plane_whoosh.wav"),this.planeAudio.preload="auto"),this.planeAudio.volume=.85,this.planeAudio.currentTime=0;const t=this.planeAudio.play();t!==void 0&&t.catch(()=>{})}catch{}this.playWhoosh()}}stopPlaneWhoosh(){if(this.planeAudio)try{this.planeAudio.pause(),this.planeAudio.currentTime=0}catch{}this.stopWhoosh()}playWhoosh(){if(this.init(),!this.isMuted){if(this.stopWhoosh(),this.ctx&&this.ctx.state==="suspended")try{this.ctx.resume().catch(()=>{})}catch{}try{const t=this.ctx.currentTime;this.whooshGain=this.ctx.createGain(),this.whooshGain.gain.setValueAtTime(.01,t),this.whooshGain.gain.linearRampToValueAtTime(.35,t+.4),this.whooshGain.gain.linearRampToValueAtTime(.4,t+1.2),this.whooshGain.gain.exponentialRampToValueAtTime(.001,t+2.2),this.whooshGain.connect(this.ctx.destination),this.whooshOsc=this.ctx.createOscillator(),this.whooshOsc.type="sawtooth",this.whooshOsc.frequency.setValueAtTime(140,t),this.whooshOsc.frequency.exponentialRampToValueAtTime(320,t+.6),this.whooshOsc.frequency.exponentialRampToValueAtTime(1100,t+1.3),this.whooshOsc.frequency.exponentialRampToValueAtTime(220,t+2.2);const e=this.ctx.createBiquadFilter();e.type="bandpass",e.frequency.setValueAtTime(450,t),e.frequency.exponentialRampToValueAtTime(1800,t+1.3),e.Q.setValueAtTime(2.8,t),this.whooshOsc.connect(e),e.connect(this.whooshGain),this.whooshOsc.start(t),this.rumbleOsc=this.ctx.createOscillator(),this.rumbleOsc.type="triangle",this.rumbleOsc.frequency.setValueAtTime(75,t),this.rumbleOsc.frequency.linearRampToValueAtTime(115,t+1.1),this.rumbleOsc.frequency.exponentialRampToValueAtTime(45,t+2.2),this.rumbleOsc.connect(this.whooshGain),this.rumbleOsc.start(t)}catch{}}}stopWhoosh(){if(this.whooshGain&&this.ctx)try{const t=this.ctx.currentTime;this.whooshGain.gain.cancelScheduledValues(t),this.whooshGain.gain.setValueAtTime(1e-4,t)}catch{}if(this.whooshOsc){try{this.whooshOsc.stop()}catch{}this.whooshOsc=null}if(this.rumbleOsc){try{this.rumbleOsc.stop()}catch{}this.rumbleOsc=null}this.whooshGain=null}playHorn(){this.init();const t=this.ctx.currentTime;[390,470].forEach(e=>{const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(e,t),n.frequency.linearRampToValueAtTime(e+15,t+.08),n.frequency.linearRampToValueAtTime(e-10,t+.35),i.gain.setValueAtTime(.01,t),i.gain.linearRampToValueAtTime(.3,t+.03),i.gain.setValueAtTime(.28,t+.3),i.gain.exponentialRampToValueAtTime(.001,t+.42);const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(750,t),a.Q.setValueAtTime(2.5,t),n.connect(a),a.connect(i),i.connect(this.ctx.destination),n.start(t),n.stop(t+.42)})}playTireScreech(){this.init();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(950,t),e.frequency.linearRampToValueAtTime(1400,t+.15),e.frequency.linearRampToValueAtTime(600,t+.45),n.gain.setValueAtTime(.01,t),n.gain.linearRampToValueAtTime(.4,t+.05),n.gain.exponentialRampToValueAtTime(.001,t+.5);const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(1100,t),e.connect(i),i.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.5)}playMetalCrash(){this.init();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(220,t),e.frequency.exponentialRampToValueAtTime(30,t+.4),n.gain.setValueAtTime(.9,t),n.gain.exponentialRampToValueAtTime(.01,t+.45),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.45);const i=this.ctx.createOscillator(),a=this.ctx.createGain();i.type="square",i.frequency.setValueAtTime(750,t),i.frequency.linearRampToValueAtTime(180,t+.35),a.gain.setValueAtTime(.6,t),a.gain.exponentialRampToValueAtTime(.01,t+.4),i.connect(a),a.connect(this.ctx.destination),i.start(t),i.stop(t+.4)}playCowAlarmed(){this.init();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(140,t),e.frequency.linearRampToValueAtTime(190,t+.2),e.frequency.linearRampToValueAtTime(90,t+.8),n.gain.setValueAtTime(.01,t),n.gain.linearRampToValueAtTime(.6,t+.1),n.gain.exponentialRampToValueAtTime(.001,t+.9);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(650,t),e.connect(i),i.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.9)}playSplash(){this.init();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(160,t),e.frequency.exponentialRampToValueAtTime(40,t+.35),n.gain.setValueAtTime(.7,t),n.gain.exponentialRampToValueAtTime(.01,t+.35),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.35)}playBrickThud(){this.init();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(160,t),e.frequency.exponentialRampToValueAtTime(35,t+.2),n.gain.setValueAtTime(.8,t),n.gain.exponentialRampToValueAtTime(.01,t+.22),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.22)}playPlankSnap(){this.init();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(200,t),e.frequency.exponentialRampToValueAtTime(50,t+.25),n.gain.setValueAtTime(.6,t),n.gain.exponentialRampToValueAtTime(.01,t+.25),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.25)}playCowMoo(){this.init();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(105,t),e.frequency.linearRampToValueAtTime(125,t+.5),e.frequency.linearRampToValueAtTime(80,t+1.4),n.gain.setValueAtTime(.01,t),n.gain.linearRampToValueAtTime(.45,t+.2),n.gain.linearRampToValueAtTime(.35,t+.9),n.gain.exponentialRampToValueAtTime(.001,t+1.5);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(450,t),e.connect(i),i.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+1.5)}startScooterEngine(){if(this.init(),this.isEngineRunning)return;this.isEngineRunning=!0,this.engineOsc=this.ctx.createOscillator(),this.engineGain=this.ctx.createGain(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.setValueAtTime(50,this.ctx.currentTime),this.engineGain.gain.setValueAtTime(.2,this.ctx.currentTime);const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(340,this.ctx.currentTime),this.engineOsc.connect(t),t.connect(this.engineGain),this.engineGain.connect(this.ctx.destination),this.engineOsc.start()}setEngineSpeed(t){if(!this.engineOsc||!this.isEngineRunning)return;const n=50+t*90;this.engineOsc.frequency.setTargetAtTime(n,this.ctx.currentTime,.08)}stopScooterEngine(){this.isEngineRunning&&(this.engineGain&&this.engineGain.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.15),setTimeout(()=>{if(this.engineOsc)try{this.engineOsc.stop()}catch{}this.isEngineRunning=!1},180))}playJugaadSuccess(){this.init();const t=[261.63,329.63,392,523.25,659.25],e=this.ctx.currentTime;t.forEach((n,i)=>{const a=this.ctx.createOscillator(),r=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(n,e+i*.08),r.gain.setValueAtTime(.3,e+i*.08),r.gain.exponentialRampToValueAtTime(.01,e+i*.08+.35),a.connect(r),r.connect(this.ctx.destination),a.start(e+i*.08),a.stop(e+i*.08+.35)})}startDesiBGM(){if(this.init(),this.musicPlaying)return;this.musicPlaying=!0;const t=[261.63,293.66,329.63,392,440,523.25,587.33],e=[0,2,4,3,2,4,5,4,3,2,1,0];let n=0;this.melodyTimer=setInterval(()=>{if(!this.musicPlaying)return;const o=this.ctx.currentTime,c=t[e[n%e.length]];n++;const l=this.ctx.createOscillator(),u=this.ctx.createGain();l.type="sine",l.frequency.setValueAtTime(c,o),u.gain.setValueAtTime(.001,o),u.gain.linearRampToValueAtTime(.09,o+.1),u.gain.exponentialRampToValueAtTime(.001,o+.7);const d=this.ctx.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(1100,o),l.connect(d),d.connect(u),u.connect(this.ctx.destination),l.start(o),l.stop(o+.75)},700);const a=60/100*1e3;let r=0;this.bgmTimer=setInterval(()=>{if(!this.musicPlaying)return;const o=this.ctx.currentTime;if(r%2===0){const u=this.ctx.createOscillator(),d=this.ctx.createGain();u.type="sine",u.frequency.setValueAtTime(r%4===0?85:105,o),u.frequency.exponentialRampToValueAtTime(40,o+.16),d.gain.setValueAtTime(.18,o),d.gain.exponentialRampToValueAtTime(.005,o+.18),u.connect(d),d.connect(this.ctx.destination),u.start(o),u.stop(o+.18)}const c=this.ctx.createOscillator(),l=this.ctx.createGain();c.type="triangle",c.frequency.setValueAtTime(r%2===0?350:420,o),l.gain.setValueAtTime(.04,o),l.gain.exponentialRampToValueAtTime(.002,o+.08),c.connect(l),l.connect(this.ctx.destination),c.start(o),c.stop(o+.08),r++},a/2)}playCoinChime(){if(this.init(),this.isMuted)return;const t=this.ctx.currentTime;[1046.5,1318.51,1567.98].forEach((e,n)=>{const i=this.ctx.createOscillator(),a=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(e,t+n*.06),a.gain.setValueAtTime(.001,t+n*.06),a.gain.linearRampToValueAtTime(.22,t+n*.06+.02),a.gain.exponentialRampToValueAtTime(.001,t+n*.06+.32),i.connect(a),a.connect(this.ctx.destination),i.start(t+n*.06),i.stop(t+n*.06+.32)})}playPhoneRing(){if(this.init(),this.isMuted)return;const t=this.ctx.currentTime;[853,960].forEach(e=>{const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(e,t),i.gain.setValueAtTime(.14,t),i.gain.setValueAtTime(.14,t+.35),i.gain.setValueAtTime(.001,t+.42),i.gain.setValueAtTime(.14,t+.55),i.gain.setValueAtTime(.14,t+.9),i.gain.exponentialRampToValueAtTime(.001,t+1.05),n.connect(i),i.connect(this.ctx.destination),n.start(t),n.stop(t+1.05)})}playPhoneDropSound(){if(this.init(),this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(620,t),e.frequency.exponentialRampToValueAtTime(140,t+.12),n.gain.setValueAtTime(.35,t),n.gain.exponentialRampToValueAtTime(.001,t+.14),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.14);const i=this.ctx.createOscillator(),a=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(180,t+.02),i.frequency.exponentialRampToValueAtTime(60,t+.22),a.gain.setValueAtTime(.4,t+.02),a.gain.exponentialRampToValueAtTime(.001,t+.25),i.connect(a),a.connect(this.ctx.destination),i.start(t+.02),i.stop(t+.25);const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(450,t+.18),r.frequency.exponentialRampToValueAtTime(220,t+.28),o.gain.setValueAtTime(.2,t+.18),o.gain.exponentialRampToValueAtTime(.001,t+.32),r.connect(o),o.connect(this.ctx.destination),r.start(t+.18),r.stop(t+.32)}playPhoneRebootSound(){if(this.init(),this.isMuted)return;const t=this.ctx.currentTime;[659.25,587.33,369.99,415.3,554.37,493.88,293.66,329.63].forEach((n,i)=>{const a=this.ctx.createOscillator(),r=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(n,t+i*.09),r.gain.setValueAtTime(.001,t+i*.09),r.gain.linearRampToValueAtTime(.22,t+i*.09+.02),r.gain.exponentialRampToValueAtTime(.001,t+i*.09+.16),a.connect(r),r.connect(this.ctx.destination),a.start(t+i*.09),a.stop(t+i*.09+.16)})}playHammerSmashPhone(){if(this.init(),this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(180,t),e.frequency.exponentialRampToValueAtTime(28,t+.45),n.gain.setValueAtTime(.85,t),n.gain.exponentialRampToValueAtTime(.001,t+.5),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.5);const i=this.ctx.createOscillator(),a=this.ctx.createGain(),r=this.ctx.createBiquadFilter();i.type="sawtooth",i.frequency.setValueAtTime(1250,t),i.frequency.exponentialRampToValueAtTime(260,t+.35),r.type="bandpass",r.frequency.setValueAtTime(1100,t),r.Q.setValueAtTime(5.5,t),a.gain.setValueAtTime(.7,t),a.gain.exponentialRampToValueAtTime(.001,t+.38),i.connect(r),r.connect(a),a.connect(this.ctx.destination),i.start(t),i.stop(t+.38),[2400,3100,1850,950].forEach((o,c)=>{const l=this.ctx.createOscillator(),u=this.ctx.createGain();l.type="square",l.frequency.setValueAtTime(o,t+c*.04),l.frequency.exponentialRampToValueAtTime(o*.4,t+c*.04+.14),u.gain.setValueAtTime(.001,t+c*.04),u.gain.linearRampToValueAtTime(.35,t+c*.04+.01),u.gain.exponentialRampToValueAtTime(.001,t+c*.04+.15),l.connect(u),u.connect(this.ctx.destination),l.start(t+c*.04),l.stop(t+c*.04+.15)})}playTapeSound(){if(this.init(),this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();e.type="sawtooth",e.frequency.setValueAtTime(800,t),e.frequency.linearRampToValueAtTime(1600,t+.1),e.frequency.linearRampToValueAtTime(500,t+.22),i.type="bandpass",i.frequency.setValueAtTime(1200,t),i.Q.setValueAtTime(2.2,t),n.gain.setValueAtTime(.01,t),n.gain.linearRampToValueAtTime(.3,t+.04),n.gain.exponentialRampToValueAtTime(.001,t+.24),e.connect(i),i.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.24)}speak(t,e="Chacha"){if("speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}}}const ct=new dp;class oe{static createCartoonBoy(){const t=new St;t.name="CartoonCharacter";const e=new K({color:16105622,roughness:.5}),n=new K({color:1920728,roughness:.65}),i=new K({color:1981066,roughness:.8}),a=new K({color:4528643,roughness:.4}),r=new K({color:16317180,roughness:.4}),o=new Wt({color:16777215}),c=new Wt({color:165063}),l=new Wt({color:988970}),u=new Wt({color:16777215});new Wt({color:8330525});const d=new Wt({color:16777215}),p=new St;p.name="TorsoGroup",p.position.set(0,1.25,0);const m=new E(new yt(.3,.28,.65,18),n);m.castShadow=!0,p.add(m);const _=new E(new _e(.18,.04,8,16),n);_.position.set(0,.35,0),_.rotation.x=Math.PI/2,p.add(_);const g=new E(new yt(.12,.14,.2,12),e);g.position.set(0,.42,0),p.add(g);const f=new St;f.position.set(0,.72,0);const h=new Nt(.35,24,24);h.scale(1,1.08,1);const S=new E(h,e);S.castShadow=!0,f.add(S);const T=new E(new Nt(.38,20,20,0,Math.PI*2,0,Math.PI*.65),a);T.position.set(0,.08,-.04),f.add(T);const x=new E(new ve(.18,.35,8),a);x.rotation.set(-.4,0,.6),x.position.set(.12,.32,.25),f.add(x),[-.14,.14].forEach((Mt,Kt)=>{const wt=new St;wt.position.set(Mt,.06,.31);const A=new E(new Nt(.09,14,14),o);A.scale.set(1,1.15,.5),wt.add(A);const y=new E(new wn(.052,16),c);y.position.set(0,0,.048),wt.add(y);const G=new E(new wn(.032,14),l);G.position.set(0,0,.05),wt.add(G);const J=new E(new wn(.014,10),u);J.position.set(.015,.015,.052),wt.add(J);const tt=new E(new et(.12,.028,.03),a);tt.position.set(0,.14,.02),tt.rotation.z=Kt===0?.12:-.12,wt.add(tt),f.add(wt)});const D=new E(new Nt(.06,12,12),e);D.position.set(0,-.04,.36),f.add(D);const b=new E(new et(.14,.025,.02),d);b.position.set(0,-.15,.34),f.add(b),[-.35,.35].forEach(Mt=>{const Kt=new E(new Nt(.08,10,10),e);Kt.scale.set(.5,1.2,.8),Kt.position.set(Mt,.02,0),f.add(Kt)}),p.add(f);const P=new St;P.position.set(.36,.25,0);const C=new E(new yt(.075,.065,.36,10),n);C.position.y=-.18,P.add(C);const v=new E(new yt(.06,.055,.32,10),e);v.position.y=-.48,P.add(v);const M=new E(new Nt(.08,10,10),e);M.position.y=-.66,P.add(M),p.add(P);const R=new St;R.name="RightArmPivot",R.position.set(-.36,.25,0);const k=new E(new yt(.075,.065,.36,10),n);k.position.y=-.18,R.add(k);const I=new E(new yt(.06,.055,.32,10),e);I.position.y=-.48,R.add(I);const H=new E(new Nt(.08,10,10),e);H.position.y=-.66,R.add(H),p.add(R);const z=new St;z.name="PhoneArmGroup",z.position.set(-.36,.25,0),z.visible=!1;const q=(Mt,Kt,wt,A,y)=>{const G=new L().subVectors(Kt,Mt),J=G.length(),tt=new yt(A,wt,J,14),$=new E(tt,y);$.position.copy(Mt).addScaledVector(G,.5);const Pt=new L(0,1,0),pt=new Wn().setFromUnitVectors(Pt,G.normalize());return $.quaternion.copy(pt),$.castShadow=!0,$},j=new L(0,0,0),V=new L(-.08,-.16,.18),it=new L(.01,.42,.06),nt=new L(.01,.47,.03),dt=new L(.02,.49,.01),Ut=new E(new Nt(.076,12,12),n);Ut.position.copy(j),z.add(Ut);const lt=q(j,V,.076,.066,n);z.add(lt);const B=new E(new Nt(.066,14,14),e);B.position.copy(V),z.add(B);const Y=q(V,it,.065,.055,e);z.add(Y);const ut=new E(new Nt(.058,12,12),e);ut.position.copy(it),z.add(ut);const rt=new E(new Nt(.075,12,12),e);rt.position.copy(nt),z.add(rt);const At=new E(new et(.075,.15,.02),new K({color:988970,metalness:.85,roughness:.2}));At.position.copy(dt),At.rotation.set(-.1,.25,.05),z.add(At);const ht=new E(new ae(.065,.13),new Wt({color:3718648}));ht.position.set(dt.x,dt.y,dt.z+.011),ht.rotation.set(-.1,.25,.05),z.add(ht),p.add(z),t.add(p);const st=new St;st.position.set(.16,.95,0);const vt=new E(new yt(.09,.08,.72,12),i);vt.position.y=-.36,st.add(vt);const It=new St;It.position.set(0,-.76,.08),It.add(new E(new et(.18,.08,.36),r));const Ft=new E(new et(.16,.12,.28),n);Ft.position.set(0,.08,-.02),It.add(Ft),st.add(It),t.add(st);const U=new St;U.position.set(-.16,.95,0);const re=new E(new yt(.09,.08,.72,12),i);re.position.y=-.36,U.add(re);const Bt=new St;Bt.position.set(0,-.76,.08),Bt.add(new E(new et(.18,.08,.36),r));const Gt=new E(new et(.16,.12,.28),n);return Gt.position.set(0,.08,-.02),Bt.add(Gt),U.add(Bt),t.add(U),t.userData={torsoGroup:p,headGroup:f,leftArmPivot:P,rightArmPivot:R,phoneArmGroup:z,setPhoneCallPose:Mt=>{Mt?(R.visible=!1,z.visible=!0):(z.visible=!1,R.visible=!0,R.rotation.set(0,0,0),f&&f.rotation.set(0,0,0))},leftLegPivot:st,rightLegPivot:U,walkPhase:0,radius:.5},t}static createSeatedRider(){const t=new St;t.name="SeatedRider";const e=new K({color:16105622,roughness:.5}),n=new K({color:1920728,roughness:.65}),i=new K({color:1981066,roughness:.8}),a=new K({color:4528643,roughness:.4}),r=new K({color:16317180,roughness:.4}),o=new E(new yt(.28,.26,.58,16),n);o.position.set(-.2,1.42,0),o.rotation.z=-.15,t.add(o);const c=new St;c.position.set(-.1,1.92,0);const l=new Nt(.32,22,22);l.scale(1,1.08,1);const u=new E(l,e);c.add(u);const d=new E(new Nt(.35,18,18,0,Math.PI*2,0,Math.PI*.65),a);d.position.set(0,.08,-.04),c.add(d);const p=new E(new ve(.16,.32,8),a);p.rotation.set(-.4,0,.6),p.position.set(.12,.3,.22),c.add(p),[-.12,.12].forEach(g=>{const f=new E(new Nt(.08,14,14),new Wt({color:16777215}));f.scale.set(.5,1,1),f.position.set(.26,.06,g),c.add(f);const h=new E(new Nt(.045,10,10),new Wt({color:165063}));h.position.set(.3,.06,g),c.add(h);const S=new E(new Nt(.018,8,8),new Wt({color:16777215}));S.position.set(.32,.08,g+.015),c.add(S);const T=new E(new et(.03,.025,.11),a);T.position.set(.25,.14,g),c.add(T)});const m=new E(new Nt(.05,10,10),e);m.position.set(.32,-.02,0),c.add(m);const _=new E(new et(.02,.022,.12),new Wt({color:16777215}));return _.position.set(.3,-.12,0),c.add(_),t.add(c),[-.32,.32].forEach(g=>{const f=new E(new yt(.065,.065,.75,8),n);f.position.set(.32,1.57,g),f.rotation.set(0,0,-1.52),t.add(f);const h=new E(new Nt(.075,8,8),e);h.position.set(.72,1.58,g),t.add(h)}),[-.22,.22].forEach(g=>{const f=new E(new et(.55,.18,.18),i);f.position.set(.12,1.13,g),t.add(f);const h=new E(new et(.18,.64,.18),i);h.position.set(.38,.76,g),t.add(h);const S=new E(new et(.32,.1,.18),r);S.position.set(.42,.44,g),t.add(S)}),t}static createDazedCharacter(){const t=new St;t.name="DazedAccidentCharacter";const e=new K({color:16105622,roughness:.5}),n=new K({color:1920728,roughness:.65}),i=new K({color:1981066,roughness:.8}),a=new K({color:4528643,roughness:.4}),r=new K({color:16317180,roughness:.4}),o=new Wt({color:16436245}),c=new E(new yt(.28,.26,.6,16),n);c.position.set(0,.45,0),c.rotation.z=.25,t.add(c);const l=new E(new Nt(.32,20,20),e);l.position.set(-.1,.95,0),l.rotation.z=.3,t.add(l);const u=new E(new Nt(.35,16,16,0,Math.PI*2,0,Math.PI*.65),a);u.position.set(-.1,1.02,-.04),t.add(u);const d=new Wt({color:1579035});[-.1,.1].forEach(g=>{const f=new E(new et(.08,.02,.02),d);f.position.set(.22,.98,g),f.rotation.y=Math.PI/2,f.rotation.z=Math.PI/4,t.add(f);const h=new E(new et(.08,.02,.02),d);h.position.set(.22,.98,g),h.rotation.y=Math.PI/2,h.rotation.z=-Math.PI/4,t.add(h)});const p=new E(new _e(.05,.02,6,12),new Wt({color:8591427}));p.position.set(.22,.82,0),p.rotation.y=Math.PI/2,t.add(p);const m=new E(new yt(.065,.065,.5,8),n);m.position.set(.12,.8,.25),m.rotation.set(.8,0,-1.1),t.add(m),[-.2,.2].forEach(g=>{const f=new E(new et(.7,.16,.16),i);f.position.set(.4,.12,g),f.rotation.z=-.15,t.add(f);const h=new E(new et(.3,.1,.16),r);h.position.set(.75,.15,g),t.add(h)});const _=new St;_.name="StarsOrbit",_.position.set(-.1,1.45,0);for(let g=0;g<3;g++){const f=g/3*Math.PI*2,h=new E(new ve(.08,.16,5),o);h.position.set(Math.cos(f)*.45,0,Math.sin(f)*.45),_.add(h)}return t.add(_),t.userData={starsOrbit:_},t}static createVintageScooter(){const t=new St;t.name="VintageScooter";const e=new K({color:6333946,roughness:.35,metalness:.2}),n=new K({color:16317180,roughness:.1,metalness:.9}),i=new K({color:1120295,roughness:.85}),a=new K({color:14870768,roughness:.25,metalness:.85}),r=new K({color:14251782,roughness:.4,metalness:.7}),o=new K({color:1841431,roughness:.6}),c=new K({color:7877903,roughness:.65}),l=new K({color:16707722,roughness:.5}),u=new K({color:12131356,roughness:.9}),d=new E(new et(2.3,.14,.76),e);d.position.set(0,.35,0),d.castShadow=!0,t.add(d),[-.2,0,.2].forEach(B=>{const Y=new E(new et(1.6,.03,.05),i);Y.position.set(.1,.43,B),t.add(Y)});const p=new E(new et(.18,1.28,.98),e);p.position.set(.85,.95,0),p.rotation.z=-.14,p.castShadow=!0,t.add(p);const m=new E(new Nt(.44,18,14,0,Math.PI),e);m.position.set(.95,.55,0),m.rotation.x=Math.PI/2,t.add(m);const _=new E(new yt(.2,.2,.06,20),n);_.rotation.z=Math.PI/2,_.position.set(1.02,1.55,0),t.add(_);const g=new E(new yt(.18,.18,.12,20),new K({color:16707722,emissive:16707722,emissiveIntensity:.85}));g.rotation.z=Math.PI/2,g.position.set(1.04,1.55,0),t.add(g),[-.4,.4].forEach(B=>{const Y=new E(new yt(.015,.015,.35,8),n);Y.position.set(.72,1.75,B),Y.rotation.z=.2,t.add(Y);const ut=new E(new yt(.09,.09,.02,16),n);ut.rotation.x=Math.PI/2,ut.position.set(.75,1.92,B),t.add(ut)});const f=new E(new yt(.04,.04,1.18,12),n);f.rotation.x=Math.PI/2,f.position.set(.75,1.58,0),t.add(f),[-.56,.56].forEach(B=>{const Y=new E(new yt(.05,.05,.14,12),i);Y.rotation.x=Math.PI/2,Y.position.set(.75,1.58,B),t.add(Y)});const h=new E(new et(1.28,.46,.52),e);h.position.set(-.3,.65,0),h.castShadow=!0,t.add(h);const S=new Nt(.52,24,20);S.scale(1.26,.78,.82);const T=new E(S,e);T.position.set(-.34,.64,0),T.castShadow=!0,t.add(T);const x=new E(new yt(.36,.36,.32,16,1,!0,0,Math.PI),e);x.rotation.z=Math.PI/2,x.rotation.y=Math.PI/2,x.position.set(-.76,.4,0),t.add(x);const D=new St;D.position.set(-.2,.96,0);const b=new E(new et(1.24,.16,.56),o);b.castShadow=!0,D.add(b);const P=new E(new et(.55,.08,.52),c);P.position.set(-.28,.08,0),D.add(P);const C=new E(new et(1.26,.02,.58),l);C.position.y=.01,D.add(C);const v=new E(new _e(.24,.022,8,22,Math.PI),n);v.rotation.y=Math.PI/2,v.rotation.x=Math.PI/2,v.position.set(-.62,.04,0),D.add(v),[-.22,.22].forEach(B=>{const Y=new E(new et(.12,.035,.03),n);Y.position.set(-.58,.02,B),D.add(Y)}),t.add(D);const M=B=>{const Y=new St;Y.position.set(B,.34,0);const ut=new E(new _e(.24,.1,16,28),i);Y.add(ut);const rt=new E(new yt(.2,.2,.14,18),a);rt.rotation.x=Math.PI/2,Y.add(rt);const At=new E(new Nt(.09,14,10,0,Math.PI),n);At.rotation.y=Math.PI/2,At.position.z=.07,Y.add(At);const ht=new E(new Nt(.09,14,10,0,Math.PI),n);ht.rotation.y=-Math.PI/2,ht.position.z=-.07,Y.add(ht);const st=new E(new yt(.14,.14,.15,12),r);return st.rotation.x=Math.PI/2,Y.add(st),Y},R=M(.95);t.add(R);const k=M(-.76);t.add(k);const I=new St;I.position.set(-1.08,.68,0),[-.12,.12].forEach(B=>{const Y=new E(new yt(.016,.016,.3,8),n);Y.rotation.z=Math.PI/3,Y.position.set(-.06,.04,B),I.add(Y)});const H=new E(new _e(.24,.09,14,24),i);H.rotation.y=Math.PI/2,H.position.set(-.2,.06,0),I.add(H);const z=new E(new yt(.18,.18,.1,16),a);z.rotation.z=Math.PI/2,z.position.set(-.2,.06,0),I.add(z),t.add(I);const q=new E(new yt(.04,.04,.85,10),n);q.rotation.z=Math.PI/2,q.position.set(-1.05,.22,-.32),t.add(q);const j=new St;j.name="BrokenKickstand",j.position.set(-.05,.26,0);const V=new E(new et(.16,.06,.28),n);j.add(V);const it=new E(new yt(.018,.018,.22,8),n);it.rotation.z=.7,it.rotation.x=.4,it.position.set(-.04,-.1,-.1),j.add(it);const nt=new E(new et(.025,.025,.025),new Wt({color:15680580}));nt.position.set(-.12,-.18,-.15),j.add(nt),t.add(j);const dt=new E(new et(.68,.34,.34),u);dt.name="BrickPropSupport",dt.position.set(-.42,.17,-.42),dt.rotation.y=.25,dt.visible=!1,t.add(dt);const Ut=oe.createSeatedRider();Ut.name="ScooterRiderMesh",Ut.visible=!1,t.add(Ut);const lt=B=>{B?(t.position.y=.22,t.rotation.set(.18,0,-1.35),dt.visible=!1,Ut.visible=!1):(t.position.y=0,t.rotation.set(0,0,0),dt.visible=!0)};return t.userData={frontWheel:R,rearWheel:k,riderMesh:Ut,brickSupport:dt,standGroup:j,setFallenState:lt,exhaustPos:new L(-1.48,.28,-.32),radius:1.2},t}static createCartoonCow(){const t=new St;t.name="CartoonCow";const e=new K({color:16448249,roughness:.7}),n=new K({color:2565930,roughness:.85}),i=new K({color:16020150,roughness:.55}),a=new K({color:16498468,roughness:.35,metalness:.2}),r=new K({color:14753096,roughness:.6}),o=new K({color:16436245,metalness:.75,roughness:.2}),c=new K({color:4528643,roughness:.75}),l=new Nt(.72,24,20);l.scale(1.42,1.05,1.05);const u=new E(l,e);u.position.set(0,.9,0),u.castShadow=!0,t.add(u);const d=new E(new Nt(.38,12,12),n);d.scale.set(1.2,.8,.2),d.position.set(-.35,1.15,.65),t.add(d);const p=new E(new Nt(.42,12,12),n);p.scale.set(1.1,.9,.2),p.position.set(.3,.9,-.65),t.add(p);const m=new E(new _e(.46,.06,8,20),r);m.position.set(.7,1.12,0),m.rotation.y=Math.PI/2,t.add(m);const _=new E(new yt(.08,.13,.16,12),o);_.position.set(.74,.74,0),t.add(_);const g=new St;g.position.set(1.02,1.35,0);const f=new E(new Nt(.46,22,22),e);f.scale.set(1.05,1.1,.95),f.castShadow=!0,g.add(f);const h=new E(new Nt(.24,12,12),n);h.scale.set(.8,1,.4),h.position.set(.12,.18,.3),g.add(h),[-.2,.2].forEach(b=>{const P=new E(new Nt(.1,14,14),new Wt({color:16777215}));P.position.set(.28,.14,b),g.add(P);const C=new E(new Nt(.055,10,10),new Wt({color:1841431}));C.position.set(.34,.14,b),g.add(C);const v=new E(new Nt(.022,8,8),new Wt({color:16777215}));v.position.set(.36,.16,b+.02),g.add(v)});const S=new E(new Nt(.32,18,16),i);S.scale.set(1.15,.72,1.12),S.position.set(.42,-.14,0),g.add(S),[-.1,.1].forEach(b=>{const P=new E(new Nt(.04,8,8),new Wt({color:3621201}));P.position.set(.72,-.1,b),g.add(P)}),[-.24,.24].forEach((b,P)=>{const C=new E(new ve(.075,.32,10),a);C.position.set(-.06,.5,b),C.rotation.z=-.35,C.rotation.x=P===0?-.35:.35,g.add(C);const v=new E(new ve(.11,.38,8),e);v.scale.set(1.1,1,.4),v.position.set(-.14,.22,b*1.4),v.rotation.set(P===0?-1.1:1.1,0,-.3),g.add(v)}),t.add(g),[[.62,.54],[.62,-.54],[-.62,.54],[-.62,-.54]].forEach(([b,P])=>{const C=new St;C.position.set(b,0,P);const v=new E(new Nt(.18,12,10),e);v.position.y=.65,C.add(v);const M=new E(new yt(.13,.11,.48,12),e);M.position.y=.38,M.castShadow=!0,C.add(M);const R=new E(new yt(.12,.14,.14,12),c);R.position.y=.07,C.add(R),t.add(C)});const T=new St;T.position.set(-1,.85,0);const x=new E(new yt(.03,.03,.72,8),e);x.position.y=-.32,x.rotation.z=.22,T.add(x);const D=new E(new ve(.08,.24,8),n);return D.position.set(.14,-.7,0),T.add(D),t.add(T),t.userData={headGroup:g,tailGroup:T,isDistracted:!1,state:"sitting",radius:1.4},t}static createRoadTrench(){const t=new St;t.name="RoadExcavationTrench";const e=new K({color:2234129,roughness:.98}),n=new K({color:1314315,roughness:.15,metalness:.3}),i=new K({color:4528643,roughness:.95}),a=new K({color:1841431,roughness:.9}),r=new K({color:7893356,roughness:.85});new K({color:223649,metalness:.65,roughness:.35}),new K({color:11817737,metalness:.8,roughness:.3}),new K({color:7877903,metalness:.7,roughness:.4});const o=new K({color:4472892,roughness:.95}),c=new K({color:15357964,roughness:.4}),l=new K({color:16317180,roughness:.3}),u=new E(new et(3.6,.3,7.2),e);u.position.set(0,-2.35,0),u.receiveShadow=!0,t.add(u);const d=new E(new ae(2.4,4.8),n);d.rotation.x=-Math.PI/2,d.position.set(.1,-2.19,0),d.receiveShadow=!0,t.add(d),[-1,1].forEach(h=>{const S=h*1.8,T=new E(new et(.2,1.8,7.2),i);T.position.set(S,-1.3,0),T.receiveShadow=!0,t.add(T);const x=new E(new et(.2,.25,7.2),r);x.position.set(S,-.275,0),x.receiveShadow=!0,t.add(x);const D=new E(new et(.25,.15,7.2),a);D.position.set(S,-.075,0),D.receiveShadow=!0,t.add(D);for(let b=-3.2;b<=3.2;b+=.45){const P=.2+(Math.sin(b*4.2+h)*.5+.5)*.35,C=new et(P,.14,.4),v=new E(C,a);v.position.set(S-h*(P/2-.05),-.07,b+(Math.random()-.5)*.1),v.rotation.y=(Math.random()-.5)*.2,v.castShadow=!0,t.add(v)}});const p=new ae(3.55,6.95),m=new K({color:165063,roughness:.12,metalness:.45,transparent:!0,opacity:.82}),_=new E(p,m);_.rotation.x=-Math.PI/2,_.position.set(0,-2.18,0),_.receiveShadow=!0,t.add(_);for(let h=0;h<35;h++){const S=(Math.random()-.5)*3,T=(Math.random()-.5)*6.5,x=h%4===0,D=x?new et(.35+Math.random()*.3,.25+Math.random()*.2,.35+Math.random()*.3):new Ui(.15+Math.random()*.2),b=new E(D,x?r:o);b.position.set(S,-2.15+Math.random()*.15,T),b.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),b.castShadow=!0,b.receiveShadow=!0,t.add(b)}const g=new E(new yt(.035,.035,1.2,8),new K({color:7877903}));g.position.set(.7,-1.6,1.3),g.rotation.set(.2,0,-.4),t.add(g);const f=new E(new ve(.09,.5,6),new K({color:4674921,metalness:.85}));return f.position.set(.95,-1.1,1.4),f.rotation.z=Math.PI/2,t.add(f),[[-1.95,-3.1],[-1.95,3.1],[1.95,-3.1],[1.95,3.1]].forEach(([h,S])=>{const T=new St;T.position.set(h,0,S);const x=new E(new et(.42,.05,.42),c);x.position.y=.025,T.add(x);const D=new E(new ve(.18,.65,14),c);D.position.y=.35,T.add(D);const b=new E(new yt(.1,.14,.18,14),l);b.position.y=.36,T.add(b),t.add(T)}),t}static createFootpathRubble(){const t=new St;t.name="FootpathConstructionRubble";const e=new K({color:4005904,roughness:.96}),n=new K({color:7893356,roughness:.9}),i=new K({color:5722958,roughness:.95}),a=new K({color:165063,roughness:.35,metalness:.4}),r=new K({color:14251782,roughness:.3,metalness:.8}),o=new K({color:16436245,roughness:.5}),c=new K({color:1579035,roughness:.7}),l=new K({color:4674921,metalness:.7,roughness:.4}),u=new ve(1.6,.9,10),d=new E(u,e);d.position.set(-.6,.45,-.3),d.scale.set(1.4,1,1.1),d.castShadow=!0,d.receiveShadow=!0,t.add(d);const p=new ve(1.5,.85,10),m=new E(p,e);m.position.set(.7,.42,.3),m.scale.set(1.3,1,1.2),m.castShadow=!0,m.receiveShadow=!0,t.add(m);const _=new ve(1.2,.65,8),g=new E(_,i);g.position.set(.1,.32,-.7),g.scale.set(1.2,1,.9),g.castShadow=!0,g.receiveShadow=!0,t.add(g);const f=new E(new et(.9,.55,.6),n);f.position.set(-1,.28,.5),f.rotation.set(.15,.4,.1),f.castShadow=!0,t.add(f);const h=new E(new et(.75,.45,.5),n);h.position.set(1.1,.22,-.4),h.rotation.set(-.2,.6,-.15),h.castShadow=!0,t.add(h);const S=new E(new et(1.2,.22,.7),n);S.position.set(-.2,.55,.4),S.rotation.set(.3,-.2,-.25),S.castShadow=!0,t.add(S);for(let D=0;D<18;D++){const b=(Math.random()-.5)*3.4,P=(Math.random()-.5)*2.2,C=new Ui(.1+Math.random()*.15),v=new E(C,D%2===0?n:i);v.position.set(b,.1+Math.random()*.2,P),v.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),v.castShadow=!0,t.add(v)}const T=new E(new yt(.28,.28,3.2,16),a);T.rotation.z=Math.PI/2,T.position.set(0,.28,.95),T.castShadow=!0,t.add(T),[-1.2,0,1.2].forEach(D=>{const b=new E(new yt(.3,.3,.08,16),r);b.rotation.z=Math.PI/2,b.position.set(D,.28,.95),t.add(b)});const x=new E(new yt(.24,.24,2.6,16),a);return x.rotation.set(.12,.15,Math.PI/2+.1),x.position.set(.2,.68,.65),x.castShadow=!0,t.add(x),[-1.55,1.55].forEach(D=>{const b=new St;b.position.set(D,0,-.3);const P=new E(new yt(.025,.025,1.1,8),l);P.position.set(0,.52,-.4),P.rotation.x=.25,b.add(P);const C=new E(new yt(.025,.025,1.1,8),l);C.position.set(0,.52,.4),C.rotation.x=-.25,b.add(C);for(let R of[.45,.78]){const k=new E(new et(.06,.18,1.05),o);k.position.set(0,R,0),b.add(k);for(let I=-.38;I<=.38;I+=.18){const H=new E(new et(.065,.18,.07),c);H.position.set(0,R,I),H.rotation.x=.35,b.add(H)}}const v=new E(new yt(.015,.015,.12,8),l);v.position.set(0,.94,0),b.add(v);const M=new E(new yt(.05,.05,.08,10),new K({color:16347926,emissive:15357964,emissiveIntensity:.6}));M.position.set(0,1.02,0),b.add(M),t.add(b)}),t}static createParkingBay(){const t=new St;t.name="SheeshMahalParkingBay";const e=new Wt({color:16317180}),n=new Wt({color:16638023}),i=new E(new ae(.12,2),e);i.rotation.x=-Math.PI/2,i.position.set(-1.6,.005,0),t.add(i);const a=new E(new ae(.12,2),e);a.rotation.x=-Math.PI/2,a.position.set(1.6,.005,0),t.add(a);const r=new E(new ae(.08,1.8),e);r.rotation.x=-Math.PI/2,r.position.set(0,.005,0),t.add(r);const o=new E(new ae(3.2,.12),e);o.rotation.x=-Math.PI/2,o.position.set(0,.005,1),t.add(o);const c=new E(new ae(3.2,.12),e);c.rotation.x=-Math.PI/2,c.position.set(0,.005,-1),t.add(c),[-1.35,1.35].forEach(h=>{const S=new E(new ae(.45,.08),n);S.rotation.x=-Math.PI/2,S.rotation.z=Math.PI/4,S.position.set(h,.006,.6),t.add(S)});const l=new E(new ae(.08,.5),e);l.rotation.x=-Math.PI/2,l.position.set(-.85,.007,0),t.add(l);const u=new E(new ae(.2,.07),e);u.rotation.x=-Math.PI/2,u.position.set(-.73,.007,-.18),t.add(u);const d=new E(new ae(.07,.18),e);d.rotation.x=-Math.PI/2,d.position.set(-.64,.007,-.1),t.add(d);const p=new E(new ae(.2,.07),e);p.rotation.x=-Math.PI/2,p.position.set(-.73,.007,-.02),t.add(p);const m=new St;m.position.set(0,2.3,0);const _=new K({color:16436245,emissive:15381256,emissiveIntensity:.8,metalness:.2,roughness:.3}),g=new E(new yt(.09,.09,.55,12),_);g.position.y=.35,m.add(g);const f=new E(new ve(.3,.5,14),_);return f.rotation.x=Math.PI,f.position.y=-.15,m.add(f),t.add(m),t.userData={arrow:m},t}static createBrick(){const t=new St;t.name="Item_Brick";const e=new E(new et(.7,.35,.35),new K({color:12131356,roughness:.9}));return e.position.y=.175,e.castShadow=!0,t.add(e),t.userData={type:"brick",isCorrect:!0,title:"Laal Eent (Heavy Brick)"},t}static createBroom(){const t=new St;t.name="Item_Broom";const e=new K({color:11817737,roughness:.75}),n=new K({color:15381256,roughness:.85}),i=new K({color:15680580,roughness:.5}),a=new E(new yt(.04,.04,1.25,10),e);a.rotation.z=Math.PI/2,a.position.set(-.2,.12,0),a.castShadow=!0,t.add(a);const r=new E(new ve(.24,.62,14),n);return r.rotation.z=-Math.PI/2,r.position.set(.62,.12,0),r.castShadow=!0,t.add(r),[-.06,.06].forEach(o=>{const c=new E(new yt(.09,.09,.05,14),i);c.rotation.z=Math.PI/2,c.position.set(.38+o,.12,0),t.add(c)}),t.userData={type:"broom",isCorrect:!1,title:"Desi Phool Jhadu (Broom)",rejectMsg:"⚠️ CRACK! Jhadu toot gayi — Scooter ka wazan nahi sambhal payi!"},t}static createBrokenPhoneScreen(){const t=new St;t.name="Item_PhoneScreen";const e=document.createElement("canvas");e.width=256,e.height=512;const n=e.getContext("2d");n.fillStyle="#0f172a",n.fillRect(0,0,256,512),n.strokeStyle="#38bdf8",n.lineWidth=4,n.beginPath(),n.moveTo(128,256),n.lineTo(40,90),n.lineTo(128,256),n.lineTo(220,110),n.lineTo(128,256),n.lineTo(30,420),n.lineTo(128,256),n.lineTo(210,400),n.stroke();const i=new Sn(e),a=new E(new et(.18,.02,.34),new K({map:i,roughness:.2,metalness:.8}));return a.position.y=.01,a.castShadow=!0,t.add(a),t.userData={type:"phone_screen",title:"Toota Hua Phone Screen",isPhonePart:!0},t}static createBrokenPhoneBack(){const t=new St;t.name="Item_PhoneBack";const e=new K({color:1976635,roughness:.4,metalness:.7}),n=new E(new et(.19,.022,.35),e);n.position.y=.011,n.castShadow=!0,t.add(n);const i=new E(new yt(.025,.025,.015,12),new K({color:592139,metalness:.9}));return i.position.set(.04,.025,-.11),t.add(i),t.userData={type:"phone_back",title:"Phone Ka Back Cover",isPhonePart:!0},t}static createPhoneBattery(){const t=new St;t.name="Item_PhoneBattery";const e=new E(new et(.11,.016,.18),new K({color:4674921,metalness:.6,roughness:.3}));e.position.y=.008,e.castShadow=!0,t.add(e);const n=new E(new et(.04,.018,.012),new K({color:16436245,metalness:.9}));return n.position.set(0,.009,-.09),t.add(n),t.userData={type:"phone_battery",title:"Phone Ki Battery",isPhonePart:!0},t}static createMithaiRubberBand(){const t=new St;t.name="Item_RubberBand";const e=new K({color:16436245,roughness:.5});for(let i=0;i<3;i++){const a=new E(new _e(.09+i*.015,.012,8,20),e);a.rotation.x=Math.PI/2+(i-1)*.2,a.rotation.y=(i-1)*.3,a.position.y=.03+i*.01,a.castShadow=!0,t.add(a)}const n=new E(new _e(.08,.01,8,20),new K({color:15680580}));return n.rotation.x=Math.PI/2,n.position.y=.045,t.add(n),t.userData={type:"rubber_band",isCorrect:!0,title:"Mithai Wali Rubber Band"},t}static createThickRope(){const t=new St;t.name="Item_ThickRope";const e=new K({color:9584654,roughness:.95});for(let n=0;n<3;n++){const i=new E(new _e(.18+n*.08,.035,10,24),e);i.rotation.x=Math.PI/2,i.position.y=.04+n*.02,i.castShadow=!0,t.add(i)}return t.userData={type:"rope",isCorrect:!1,title:"Bhari Jute Ki Rassi",rejectMsg:"Miyaan! Itni moti rassi se mobile baandhoge toh jeb me kaise ghusega? Koi patli rubber band dhundo!"},t}static createFixedRubberBandPhone(){const t=new St;t.name="Item_FixedPhone";const e=new E(new et(.19,.03,.35),new K({color:988970,roughness:.3}));e.position.y=.015,t.add(e);const n=document.createElement("canvas");n.width=256,n.height=512;const i=n.getContext("2d");i.fillStyle="#065f46",i.fillRect(0,0,256,512),i.fillStyle="#34d399",i.font="bold 36px sans-serif",i.textAlign="center",i.fillText("⚡ 100% JUGAAD",128,140),i.fillStyle="#ffffff",i.font="bold 26px sans-serif",i.fillText("Sheesh Mahal Map",128,220),i.fillText("📍 Navigating...",128,280),i.fillStyle="#facc15",i.fillText("Guddu Weds Rani 💍",128,380);const a=new Sn(n),r=new E(new ae(.17,.32),new Wt({map:a}));r.rotation.x=-Math.PI/2,r.position.set(0,.032,0),t.add(r);const o=new K({color:16436245,roughness:.4});return[-.08,.08].forEach(c=>{const l=new E(new et(.2,.036,.024),o);l.position.set(0,.016,c),t.add(l)}),t.userData={type:"fixed_phone",title:"Rubber Band Se Juda Naya Phone",score:300},t}static createHammerItem(){const t=new St;t.name="Item_Hammer";const e=new K({color:10576391,roughness:.75}),n=new K({color:3359061,metalness:.88,roughness:.25}),i=new E(new yt(.022,.026,.42,10),e);i.position.y=.16,i.castShadow=!0,t.add(i);const a=new E(new et(.14,.085,.085),n);a.position.set(0,.35,0),a.castShadow=!0,t.add(a);const r=new E(new et(.015,.075,.075),n);r.position.set(.075,.35,0),t.add(r);const o=new E(new et(.015,.075,.075),n);return o.position.set(-.075,.35,0),t.add(o),t.userData={type:"hammer",isCorrect:!1,isDisaster:!0,title:"Bhari Desi Hathoda",desc:"Heavy cast-iron hammer"},t}static createCelloTapeItem(){const t=new St;t.name="Item_CelloTape";const e=new K({color:16707722,roughness:.3,metalness:.1,transparent:!0,opacity:.85}),n=new K({color:14251782,roughness:.9}),i=new E(new yt(.05,.05,.048,16),n);i.rotation.x=Math.PI/2,i.position.y=.035,t.add(i);const a=new E(new _e(.075,.024,10,24),e);return a.rotation.x=Math.PI/2,a.position.y=.035,a.castShadow=!0,t.add(a),t.userData={type:"cello_tape",isCorrect:!0,isLowScore:!0,title:"Chupkaoo Cello Tape",score:100},t}static createFixedTapePhone(){const t=new St;t.name="Item_FixedTapePhone";const e=new E(new et(.19,.03,.35),new K({color:988970,roughness:.3}));e.position.y=.015,t.add(e);const n=document.createElement("canvas");n.width=256,n.height=512;const i=n.getContext("2d");i.fillStyle="#065f46",i.fillRect(0,0,256,512),i.fillStyle="#34d399",i.font="bold 34px sans-serif",i.textAlign="center",i.fillText("🩹 TAPE JUGAAD",128,140),i.fillStyle="#ffffff",i.font="bold 24px sans-serif",i.fillText("Screen Thodi Dhundhli",128,220),i.fillText("📍 GPS: Sheesh Mahal",128,280),i.fillStyle="#facc15",i.fillText("Kam Score (+100 Pts)",128,380);const a=new Sn(n),r=new E(new ae(.17,.32),new Wt({map:a}));r.rotation.x=-Math.PI/2,r.position.set(0,.032,0),t.add(r);const o=new K({color:16707722,transparent:!0,opacity:.65,roughness:.2});return[-.07,0,.07].forEach((c,l)=>{const u=new E(new et(.2,.034,.038),o);u.position.set(0,.016,c),u.rotation.y=(l-1)*.15,t.add(u)}),t.userData={type:"fixed_tape_phone",title:"Cello Tape Se Juda Phone",score:100},t}static createSmashedPhoneDebris(){const t=new St;t.name="Item_SmashedPhone";const e=new K({color:1579035,roughness:.95}),n=new K({color:3718648,roughness:.1,transparent:!0,opacity:.75}),i=new E(new et(.26,.006,.42),e);i.position.y=.003,i.rotation.y=.25,t.add(i);for(let a=0;a<14;a++){const r=a/14*Math.PI*2,o=.12+Math.random()*.18,c=new E(new ve(.02+Math.random()*.02,.04,3),n);c.position.set(Math.cos(r)*o,.005,Math.sin(r)*o),c.rotation.set(Math.random()*2,Math.random()*2,Math.random()*2),t.add(c)}return t.userData={type:"smashed_debris",title:"Puri Tarah Pista Hua Phone"},t}static createJunkToolCorner(){const t=new St;t.name="JunkToolCorner";const e=new K({color:5716249,roughness:.9}),n=new K({color:7877903,metalness:.6,roughness:.7}),i=new K({color:4674921,metalness:.85,roughness:.3}),a=new E(new et(.85,.42,.55),e);a.position.set(0,.21,0),a.castShadow=!0,a.receiveShadow=!0,t.add(a);const r=new E(new et(.42,.18,.28),n);r.position.set(-.16,.51,.05),r.rotation.y=.15,t.add(r);const o=new E(new yt(.07,.09,.24,10),n);o.position.set(.24,.54,.08),t.add(o);const c=new E(new yt(.018,.02,.38,8),e);c.position.set(.38,.22,.26),c.rotation.set(.4,.2,.5),t.add(c);const l=new E(new et(.11,.07,.07),i);l.position.set(.48,.38,.32),l.rotation.set(.4,.2,.5),t.add(l);const u=new K({color:16436245,roughness:.5}),d=new E(new _e(.065,.015,8,16),u);d.rotation.x=Math.PI/2,d.position.set(-.25,.43,-.12),t.add(d);const p=new K({color:16707722,transparent:!0,opacity:.85}),m=new E(new _e(.055,.018,8,16),p);m.rotation.x=Math.PI/2,m.position.set(.12,.43,-.1),t.add(m);const _=new K({color:9584654,roughness:.95}),g=new E(new _e(.18,.038,8,20),_);g.rotation.x=Math.PI/2,g.position.set(.36,.04,-.22),t.add(g);const f=document.createElement("canvas");f.width=256,f.height=128;const h=f.getContext("2d");h.fillStyle="#f59e0b",h.font="bold 26px sans-serif",h.textAlign="center",h.fillText("📦 KABAAD DHER",128,50),h.fillStyle="#ffffff",h.font="bold 22px sans-serif",h.fillText("Press [E] for Tools",128,90);const S=new Sn(f),T=new E(new ae(.9,.45),new Wt({map:S,transparent:!0,opacity:.95,side:qe}));return T.position.set(0,.82,0),t.add(T),t.userData={type:"junk_pile",title:"Kabaad Ka Dher (Tools & Scrap)",isJunkPile:!0,labelMesh:T},t}static createTimberPlank(){const t=new St;t.name="Item_Plank";const e=new K({color:7877903,roughness:.85}),n=new K({color:4144966,metalness:.8,roughness:.3});for(let i=0;i<4;i++){const a=-.675+i*.45,r=new E(new et(4.2,.18,.42),e);r.position.set(0,.09,a),r.castShadow=!0,r.receiveShadow=!0,t.add(r)}return[-1.9,1.9,0].forEach(i=>{const a=new E(new et(.16,.2,1.84),n);a.position.set(i,.095,0),t.add(a)}),t.userData={type:"plank",isCorrect:!0,title:"Lakdi ka Phatta",widthZ:1.8,lengthX:4.2},t}static createShortPlank(){const t=new St;t.name="Item_ShortPlank";const e=new K({color:9584654,roughness:.85}),n=new K({color:5395035,metalness:.7,roughness:.4});for(let i=0;i<3;i++){const a=-.42+i*.42,r=new E(new et(2.2,.16,.38),e);r.position.set(0,.08,a),r.castShadow=!0,r.receiveShadow=!0,t.add(r)}return[-.95,.95].forEach(i=>{const a=new E(new et(.14,.18,1.3),n);a.position.set(i,.085,0),t.add(a)}),t.userData={type:"short_plank",isCorrect:!1,title:"Lakdi ka Phatta",rejectMsg:"Yeh phatta gaddhe se chhota pad gaya! Dono kinaron par tik hi nahi paya!"},t}static createCardboard(){const t=new St;t.name="Item_Cardboard";const e=new E(new et(2.4,.04,1.4),new K({color:14251782,roughness:.9}));return e.position.y=.02,t.add(e),t.userData={type:"cardboard",isCorrect:!1,title:"Patla Gatta (Cardboard)",rejectMsg:"Yeh patla gatta gaddhe par rakha toh scooter seedha kichad me dhas jayegi! Bhari lakdi ka phatta dalo!"},t}static createGrassRotiBasket(){const t=new St;t.name="Item_Grass";const e=new E(new yt(.45,.35,.3,14),new K({color:7877903}));e.position.y=.15,t.add(e);const n=new E(new Nt(.42,12,10),new K({color:1483594}));n.position.y=.28,t.add(n);const i=new E(new yt(.2,.2,.04,12),new K({color:14251782}));return i.position.set(.05,.42,.05),t.add(i),t.userData={type:"grass",isCorrect:!0,title:"Taazi Ghaas & Garma-Garam Roti"},t}static createOldTyre(){const t=new St;t.name="Item_Tyre";const e=new E(new _e(.35,.12,10,20),new K({color:2565930,roughness:.9}));return e.rotation.x=Math.PI/2,e.position.y=.12,t.add(e),t.userData={type:"tyre",isCorrect:!1,title:"Purana Cycle Tyre",rejectMsg:"Gau Mata tyre dekh kar nahi hilengi miyaan! Unko taazi ghaas ya roti do!"},t}static createStreetEnvironment(){const t=new St,e=new K({color:2696484,roughness:.92}),n=new Wt({color:16317180}),i=new E(new et(60,.4,7),e);i.position.set(14,-.2,0),i.receiveShadow=!0,t.add(i);for(let lt=-14;lt<=41.5;lt+=2.5){const B=new E(new ae(1.4,.18),n);B.rotation.x=-Math.PI/2,B.position.set(lt,.005,0),t.add(B)}const a=new E(new et(46.4,.4,7),e);a.position.set(70.8,-.2,0),a.receiveShadow=!0,t.add(a);for(let lt=49.5;lt<=91.5;lt+=2.5){const B=new E(new ae(1.4,.18),n);B.rotation.x=-Math.PI/2,B.position.set(lt,.005,0),t.add(B)}const r=new E(new et(110,.35,3.5),new K({color:6583435,roughness:.85}));r.position.set(39,.08,-5.2),r.receiveShadow=!0,t.add(r);const o=new K({color:4674921,roughness:.85}),c=new K({color:3359061,roughness:.95}),l=new E(new et(60,.3,.4),o);l.position.set(14,.1,3.6),l.receiveShadow=!0,t.add(l);const u=new E(new et(.35,.28,.42),c);u.position.set(44.05,.04,3.6),u.rotation.z=-.35,t.add(u);const d=new E(new et(46.4,.3,.4),o);d.position.set(70.8,.1,3.6),d.receiveShadow=!0,t.add(d);const p=new E(new et(.35,.28,.42),c);p.position.set(47.55,.04,3.6),p.rotation.z=.35,t.add(p);const m=new E(new et(.5,.25,.35),c);m.position.set(45,-2.12,3.4),m.rotation.set(.4,.3,-.6),t.add(m);const _=new E(new et(.4,.22,.3),c);_.position.set(46.6,-2.14,3.3),_.rotation.set(-.3,.6,.4),t.add(_);const g=[16707722,16557477,9684477,8843180,16638023,16361684];for(let lt=0;lt<15;lt++){if(lt===1)continue;const B=new E(new et(6,7+lt%3*2,4),new K({color:g[lt%g.length],roughness:.85}));if(B.position.set(-10+lt*6.8,(7+lt%3*2)/2,-7.2),B.castShadow=!0,t.add(B),lt===7){const Y=new E(new et(2.4,.8,.8),new K({color:14251782}));Y.position.set(36,3.5,-5),t.add(Y)}else{const Y=new E(new et(4.2,.8,.8),new K({color:14251782}));Y.position.set(-10+lt*6.8,3.5,-5),t.add(Y)}}const f=new St;f.position.set(18,.2,-4);const h=new E(new et(2.8,1.1,1.4),new K({color:10105874}));h.position.y=.55,f.add(h);const S=new E(new yt(.2,.26,.45,14),new K({color:16096779,metalness:.75,roughness:.2}));S.position.set(.6,1.32,0),f.add(S);const T=new K({color:7877903,roughness:.8});[[-1.25,-.6],[1.25,-.6],[-1.25,.6],[1.25,.6]].forEach(([lt,B])=>{const Y=new E(new yt(.045,.045,2.5,8),T);Y.position.set(lt,1.25,B),Y.castShadow=!0,f.add(Y)});const x=new E(new ve(2.2,.7,4),new K({color:2450411}));x.position.set(0,2.6,0),x.rotation.y=Math.PI/4,f.add(x),t.add(f);for(let lt=-8;lt<=86;lt+=12){const B=new E(new yt(.08,.1,4.5,8),new K({color:2042167,metalness:.8}));B.position.set(lt,2.25,-3.8),t.add(B);const Y=new E(new Nt(.25,12,12),new Wt({color:16707722}));Y.position.set(lt,4.4,-3.6),t.add(Y);const ut=new os(16638023,1.2,10);ut.position.set(lt,4.2,-3.4),t.add(ut)}const D=new St;D.name="SheeshMahalWeddingVenue",D.position.set(80,0,0);const b=new K({color:14251782,roughness:.65,metalness:.15}),P=new K({color:16436245,roughness:.35,metalness:.6}),C=new K({color:10033947,roughness:.6}),v=new K({color:8917815,roughness:.8}),M=new E(new ae(6.5,2.8),v);M.rotation.x=-Math.PI/2,M.position.set(-.2,.015,0),M.receiveShadow=!0,D.add(M),[-1.4,1.4].forEach(lt=>{const B=new E(new ae(6.5,.14),P);B.rotation.x=-Math.PI/2,B.position.set(-.2,.02,lt),D.add(B)});const R=new E(new et(.38,3.8,2.85),b);R.position.set(0,1.9,-2.88),R.castShadow=!0,D.add(R);const k=new E(new et(.38,3.8,2.85),b);k.position.set(0,1.9,2.88),k.castShadow=!0,D.add(k);const I=new E(new et(.42,.8,2.9),b);I.position.set(0,3.4,0),I.castShadow=!0,D.add(I);const H=new E(new et(.52,.22,8.8),P);H.position.set(0,3.91,0),D.add(H),[-1.45,1.45].forEach(lt=>{const B=new E(new yt(.18,.2,3.8,14),P);B.position.set(.04,1.9,lt),B.castShadow=!0,D.add(B);const Y=new E(new Nt(.26,12,12,0,Math.PI*2,0,Math.PI*.7),P);Y.position.set(0,4.15,lt),D.add(Y)});const z=new K({color:15357964,roughness:.8}),q=new K({color:16436245,roughness:.8});for(let lt=-1.35;lt<=1.35;lt+=.22){const B=new E(new Nt(.075,6,6),Math.round(lt*10)%2===0?z:q);B.position.set(-.24,2.95,lt),D.add(B)}[-1.42,1.42].forEach(lt=>{for(let B=.6;B<=2.9;B+=.26){const Y=new E(new Nt(.07,6,6),Math.round(B*10)%2===0?z:q);Y.position.set(-.24,B,lt),D.add(Y)}});const j=new E(new ve(2.8,1.1,4),C);j.position.set(1.6,4.35,0),j.rotation.y=Math.PI/4,D.add(j);const V=new os(16707722,1.8,9);V.position.set(-.2,3.2,0),D.add(V);const it=document.createElement("canvas");it.width=1024,it.height=256;const nt=it.getContext("2d");nt.fillStyle="#4a0418",nt.fillRect(0,0,1024,256),nt.strokeStyle="#facc15",nt.lineWidth=16,nt.strokeRect(8,8,1008,240),nt.fillStyle="#fde047",nt.strokeStyle="#000000",nt.lineWidth=6,nt.font="bold 62px sans-serif",nt.textAlign="center",nt.strokeText("🌸 SHEESH MAHAL: GUDDU KI BAARAAT 🌸",512,102),nt.fillText("🌸 SHEESH MAHAL: GUDDU KI BAARAAT 🌸",512,102),nt.fillStyle="#ffffff",nt.strokeText("★ DULHE KA SEHRA MANDAP ★",512,185),nt.fillText("★ DULHE KA SEHRA MANDAP ★",512,185);const dt=new Sn(it),Ut=new E(new ae(3.2,.85),new Wt({map:dt,transparent:!0}));return Ut.rotation.y=-Math.PI/2+.35,Ut.position.set(-.25,3.38,.15),D.add(Ut),t.add(D),t}static createDesiCoin(){const t=new St;t.name="DesiCoin";const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d"),i=n.createRadialGradient(128,128,20,128,128,120);i.addColorStop(0,"#fef08a"),i.addColorStop(.5,"#f59e0b"),i.addColorStop(1,"#b45309"),n.fillStyle=i,n.beginPath(),n.arc(128,128,120,0,Math.PI*2),n.fill(),n.strokeStyle="#78350f",n.lineWidth=10,n.beginPath(),n.arc(128,128,108,0,Math.PI*2),n.stroke(),n.font="bold 120px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#78350f",n.fillText("₹",130,132),n.fillStyle="#ffffff",n.fillText("₹",126,126);const a=new Sn(e),r=new K({color:16498468,metalness:.85,roughness:.25,map:a}),o=new K({color:14251782,metalness:.9,roughness:.3}),c=new E(new yt(.28,.28,.06,24),[o,r,r]);c.rotation.x=Math.PI/2,c.castShadow=!0,t.add(c);const l=new os(16707722,.8,2.2);return l.position.set(0,0,0),t.add(l),t.userData={isCollected:!1,initialY:.65,rotSpeed:2.8},t.position.y=.65,t}static createWarningBarrier(){const t=new St;t.name="WarningBarrier";const e=new K({color:3359061,roughness:.6}),n=new K({color:16347926,roughness:.5}),i=new K({color:16317180,roughness:.4});[-1.6,1.6].forEach(l=>{const u=new St;u.position.set(0,0,l);const d=new E(new et(.42,.05,.42),e);d.position.y=.025,u.add(d);const p=new E(new ve(.18,.65,14),n);p.position.y=.35,u.add(p);const m=new E(new yt(.12,.14,.16,14),i);m.position.y=.34,u.add(m),t.add(u)});const a=document.createElement("canvas");a.width=512,a.height=128;const r=a.getContext("2d");r.fillStyle="#facc15",r.fillRect(0,0,512,128),r.fillStyle="#111827",r.fillRect(10,10,492,108),r.fillStyle="#fde047",r.font="bold 36px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText("⚠️ SAVDHAN! AAGE GADDHA HAI ⚠️",256,44),r.fillStyle="#ffffff",r.font="bold 24px sans-serif",r.fillText("ROAD WORK IN PROGRESS (JUGAAD REQUIRED)",256,88);const o=new Sn(a),c=new E(new et(.08,.55,2.8),new K({map:o,roughness:.5}));return c.position.set(0,.72,0),t.add(c),[-1.25,1.25].forEach(l=>{const u=new E(new yt(.04,.04,.75,8),e);u.position.set(0,.375,l),t.add(u)}),t}static createCartoonChachi(){const t=new St;t.name="CartoonChachi";const e=new K({color:15973780,roughness:.5}),n=new K({color:14362487,roughness:.65}),i=new K({color:10295117,roughness:.55}),a=new K({color:16436245,metalness:.8,roughness:.25}),r=new K({color:1579035,roughness:.4}),o=new K({color:16777215,roughness:.6});new K({color:988970,metalness:.8,roughness:.2}),new Wt({color:3718648});const c=new St;c.position.set(0,1.22,0);const l=new E(new yt(.26,.24,.6,16),i);c.add(l);const u=new E(new et(.16,.65,.32),n);u.rotation.z=-.35,u.position.set(.04,.02,.05),c.add(u);const d=new E(new et(.04,.66,.33),a);d.rotation.z=-.35,d.position.set(.11,.02,.05),c.add(d);const p=new E(new yt(.1,.12,.18,12),e);p.position.set(0,.38,0),c.add(p);const m=new St;m.position.set(0,.66,0);const _=new Nt(.32,22,22);_.scale(1,1.05,1);const g=new E(_,e);m.add(g);const f=new E(new Nt(.35,20,20,0,Math.PI*2,0,Math.PI*.68),r);f.position.set(0,.06,-.04),m.add(f);const h=new E(new Nt(.18,16,16),r);h.position.set(0,-.05,-.34),m.add(h);const S=new E(new _e(.17,.04,8,16),o);S.position.set(0,-.05,-.34),m.add(S);const T=new E(new wn(.025,12),new Wt({color:12456508}));T.position.set(0,.11,.33),m.add(T),[-.11,.11].forEach(st=>{const vt=new E(new Nt(.075,12,12),new Wt({color:16777215}));vt.scale.set(1,1.15,.5),vt.position.set(st,.04,.29),m.add(vt);const It=new E(new wn(.042,12),new Wt({color:4528643}));It.position.set(st,.04,.33),m.add(It);const Ft=new E(new wn(.012,8),new Wt({color:16777215}));Ft.position.set(st+.01,.055,.332),m.add(Ft)}),[-.32,.32].forEach(st=>{const vt=new E(new Nt(.03,8,8),a);vt.position.set(st,.02,0),m.add(vt);const It=new E(new ve(.045,.08,10),a);It.position.set(st,-.06,0),m.add(It)});const x=new E(new Nt(.045,10,10),e);x.position.set(0,-.04,.33),m.add(x);const D=new E(new et(.11,.022,.02),new Wt({color:16777215}));D.position.set(0,-.14,.31),m.add(D),c.add(m);const b=new St;b.position.set(.32,.22,0);const P=new E(new yt(.065,.055,.35,10),i);P.position.y=-.17,b.add(P);const C=new E(new yt(.055,.05,.32,10),e);C.position.y=-.48,b.add(C);const v=new E(new _e(.06,.015,6,12),a);v.position.y=-.58,v.rotation.x=Math.PI/2,b.add(v);const M=new E(new Nt(.065,8,8),e);M.position.y=-.66,b.add(M),c.add(b);const R=new St;R.name="PhoneArmPivot",R.position.set(-.32,.22,0);const k=(st,vt,It,Ft,U)=>{const re=new L().subVectors(vt,st),Bt=re.length(),Gt=new yt(Ft,It,Bt,14),Mt=new E(Gt,U);Mt.position.copy(st).addScaledVector(re,.5);const Kt=new L(0,1,0),wt=new Wn().setFromUnitVectors(Kt,re.normalize());return Mt.quaternion.copy(wt),Mt.castShadow=!0,Mt},I=new L(0,0,0),H=new L(-.06,-.14,.16),z=new L(.01,.36,.05),q=new L(.01,.4,.02),j=new L(.02,.43,.01),V=new E(new Nt(.068,12,12),i);V.position.copy(I),R.add(V);const it=k(I,H,.068,.058,i);R.add(it);const nt=new E(new Nt(.058,14,14),e);nt.position.copy(H),R.add(nt);const dt=k(H,z,.057,.048,e);R.add(dt);const Ut=new E(new Nt(.05,12,12),e);Ut.position.copy(z),R.add(Ut);const lt=new E(new _e(.058,.015,6,14),a);lt.position.copy(z),lt.rotation.x=Math.PI/2,R.add(lt);const B=new E(new Nt(.065,12,12),e);B.position.copy(q),R.add(B);const Y=new E(new et(.075,.15,.02),new K({color:988970,metalness:.85,roughness:.2}));Y.position.copy(j),Y.rotation.set(-.1,.25,.05),R.add(Y);const ut=new E(new ae(.065,.13),new Wt({color:3718648}));ut.position.set(j.x,j.y,j.z+.011),ut.rotation.set(-.1,.25,.05),R.add(ut),c.add(R),t.add(c);const rt=new E(new yt(.24,.38,.95,18),n);rt.position.set(0,.48,0),rt.castShadow=!0,t.add(rt);const At=new E(new yt(.382,.385,.08,18),a);At.position.set(0,.05,0),t.add(At);const ht=new E(new et(.12,.85,.08),n);return ht.position.set(0,.45,.32),t.add(ht),t.userData={headGroup:m,phoneArmPivot:R,torsoGroup:c},t}static createChachaHome(){const t=new St;t.name="ChachaHome";const e=new K({color:16707722,roughness:.85}),n=new K({color:11817737,roughness:.7}),i=new K({color:4528643,roughness:.6}),a=new K({color:12730636,roughness:.8}),r=new K({color:7893356,roughness:.9}),o=new K({color:16436245,metalness:.8,roughness:.25});new K({color:1579035,metalness:.5,roughness:.5});const c=new K({color:1409085,roughness:.6}),l=new E(new et(6.6,7.2,3.5),e);l.position.set(0,3.6,-1.75),l.castShadow=!0,t.add(l);const u=new E(new et(6.8,.28,.4),n);u.position.set(0,7.1,.1),t.add(u);const d=new E(new et(7,.24,1.4),a);d.rotation.x=.35,d.position.set(0,7.3,.45),t.add(d);const p=new E(new et(6.4,.32,2),r);p.position.set(0,.16,1),p.receiveShadow=!0,t.add(p);const m=new E(new et(2.4,.16,.5),r);m.position.set(0,.08,2.25),m.receiveShadow=!0,t.add(m);const _=new E(new et(.18,2.6,.22),i);_.position.set(-1,1.45,.05),t.add(_);const g=new E(new et(.18,2.6,.22),i);g.position.set(1,1.45,.05),t.add(g);const f=new E(new et(2.2,.24,.24),i);f.position.set(0,2.75,.05),t.add(f);const h=new St;h.position.set(-.91,1.45,.05);const S=new E(new et(.88,2.4,.06),i);S.position.set(.44,0,0),h.add(S);const T=new E(new _e(.045,.012,6,12),o);T.position.set(.78,0,.04),h.add(T),t.add(h);const x=new St;x.position.set(.91,1.45,.05);const D=new E(new et(.88,2.4,.06),i);D.position.set(-.44,0,0),x.add(D);const b=new E(new _e(.045,.012,6,12),o);b.position.set(-.78,0,.04),x.add(b),t.add(x);const P=new E(new ae(1.8,2.5),new Wt({color:592139}));P.position.set(0,1.45,.01),t.add(P);const C=document.createElement("canvas");C.width=512,C.height=128;const v=C.getContext("2d");v.fillStyle="#451a03",v.fillRect(0,0,512,128),v.strokeStyle="#facc15",v.lineWidth=8,v.strokeRect(6,6,500,116),v.fillStyle="#fef08a",v.font="bold 36px sans-serif",v.textAlign="center",v.textBaseline="middle",v.fillText("🏠 चाचा का निवास 🏠",256,42),v.fillStyle="#f59e0b",v.font="bold 22px sans-serif",v.fillText("(लाला का बाड़ा, पुराना भोपाल)",256,88);const M=new Sn(C),R=new E(new et(1.9,.48,.05),new K({map:M,roughness:.6}));R.position.set(0,3.25,.12),t.add(R);const k=new E(new yt(.08,.12,.28,8),o);k.position.set(1.4,2.8,.35),t.add(k);const I=new os(16707722,1.2,5);I.position.set(1.4,2.65,.45),t.add(I);const H=new E(new et(.42,.42,.42),n);H.position.set(2.4,.53,1.4),t.add(H);const z=new E(new Nt(.24,10,8),c);return z.position.set(2.4,.88,1.4),t.add(z),t.userData={doorPivotL:h,doorPivotR:x,openDoors:()=>{h.rotation.y=-Math.PI*.45,x.rotation.y=Math.PI*.45},closeDoors:()=>{h.rotation.y=0,x.rotation.y=0}},t}}class fp{constructor(){this.stage=0,this.meter=0,this.inventory=null,this.isRiding=!1,this.scooterSpeed=0,this.maxSpeed=13,this.isFalling=!1,this.plankPlaced=!1,this.plankZ=0,this.plankHalfWidth=.95,this.placedPlankType=null,this.placedPlankMesh=null,this.longPlankPlaced=!1,this.longPlankMesh=null,this.longPlankZ=0,this.shortPlankPlaced=!1,this.shortPlankMesh=null,this.shortPlankZ=0,this.isCutscene=!1,this.cutsceneTime=0,this.cutscenePhase=0,this.coins=[],this.warningBarrier=null,this.trenchEncountered=!1,this.lives=3,this.gameTimer=180,this.timerRunning=!1,this.currentRunScore=0,this.isGameOver=!1,this.keys={left:!1,right:!1,up:!1,down:!1},this.initScene(),this.initUI(),this.setupEvents(),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}initScene(){this.container=document.getElementById("game-container"),this.scene=new op,this.scene.background=new $t(16498468),this.scene.fog=new Ya(16638023,.015),this.camera=new Fe(45,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(-4,4.8,9.5),this.camera.lookAt(-2,1.2,0),this.renderer=new rp({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=oo,this.container.appendChild(this.renderer.domElement);const t=new cp(16776171,7877903,.75);this.scene.add(t);const e=new up(16096779,1.6);e.position.set(12,24,18),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,this.scene.add(e),this.env=oe.createStreetEnvironment(),this.scene.add(this.env),this.scooter=oe.createVintageScooter(),this.scooter.position.set(-2.8,0,0),this.scooter.rotation.set(0,0,0),this.scooter.userData.setFallenState(!1),this.scooter.userData.riderMesh.visible=!1,this.scene.add(this.scooter),this.chachaHome=oe.createChachaHome(),this.chachaHome.position.set(-6,0,-4.8),this.scene.add(this.chachaHome),this.player=oe.createCartoonBoy(),this.player.position.set(-6,.32,-4.6),this.player.visible=!1,this.scene.add(this.player),this.fallingPhoneMesh=oe.createBrokenPhoneBack();const n=new E(new ae(.17,.32),new Wt({color:3718648}));n.rotation.x=-Math.PI/2,n.position.set(0,.024,0),this.fallingPhoneMesh.add(n),this.fallingPhoneMesh.visible=!1,this.scene.add(this.fallingPhoneMesh),this.trench=oe.createRoadTrench(),this.trench.position.set(45.8,0,0),this.scene.add(this.trench),this.footpathRubble=oe.createFootpathRubble(),this.footpathRubble.position.set(45.8,.08,-5),this.scene.add(this.footpathRubble),this.cow=oe.createCartoonCow(),this.cow.position.set(62,0,-.2),this.cow.rotation.y=-Math.PI/2,this.scene.add(this.cow),this.chachi=oe.createCartoonChachi(),this.chachi.position.set(77.8,0,.3),this.chachi.rotation.y=-Math.PI/2-.25,this.scene.add(this.chachi),this.parkingBay=oe.createParkingBay(),this.parkingBay.position.set(74,.02,-2.2),this.scene.add(this.parkingBay),this.parkingArrow=this.parkingBay.userData.arrow,this.items=[],this.phoneScreenItem=oe.createBrokenPhoneScreen(),this.phoneScreenItem.position.set(-5.8,.32,-3.4),this.phoneScreenItem.userData={type:"broken_phone",title:"Toota Hua Phone",isPhone:!0},this.phoneScreenItem.visible=!1,this.scene.add(this.phoneScreenItem),this.items.push(this.phoneScreenItem),this.phoneBackItem=oe.createBrokenPhoneBack(),this.phoneBackItem.position.set(-6.1,.32,-3.2),this.phoneBackItem.visible=!1,this.scene.add(this.phoneBackItem),this.junkPile=oe.createJunkToolCorner(),this.junkPile.position.set(-9.2,.32,-2.8),this.junkPile.userData&&this.junkPile.userData.labelMesh&&(this.junkPile.userData.labelMesh.visible=!1),this.scene.add(this.junkPile);const i=oe.createTimberPlank();i.position.set(39,2.05,-5),i.rotation.set(-.14,Math.PI/2,Math.PI/2),this.scene.add(i),this.items.push(i);const a=oe.createShortPlank();a.position.set(41.5,1.05,-5),a.rotation.set(-.14,Math.PI/2,Math.PI/2),this.scene.add(a),this.items.push(a);const r=oe.createGrassRotiBasket();r.position.set(58.5,0,-3.2),this.scene.add(r),this.items.push(r);const o=oe.createBrick();o.position.set(74.8,.28,-3.8),this.scene.add(o),this.items.push(o);const c=oe.createBroom();c.position.set(75.6,.32,-3.85),c.rotation.set(.08,.35,.04),this.scene.add(c),this.items.push(c);const l=oe.createOldTyre();l.position.set(76.4,.3,-3.8),l.rotation.set(Math.PI/2,0,.3),this.scene.add(l),this.items.push(l);const u=[{x:3.5,z:-1.4},{x:8,z:1.4},{x:13,z:-1.6},{x:18,z:1.6},{x:23,z:-1.2},{x:28,z:1.2},{x:33,z:-1.5},{x:38,z:1.5},{x:41.5,z:0},{x:45.8,z:0},{x:50,z:1},{x:67,z:-.8},{x:73,z:0}];this.coins=u.map(d=>{const p=oe.createDesiCoin();return p.position.set(d.x,.65,d.z),this.scene.add(p),p}),this.staticColliders=[{type:"box",minX:-9.5,maxX:-2.5,minZ:-10,maxZ:-4.8,name:"HomeBackWall"},{type:"circle",x:-3.6,z:-3.4,radius:.45,name:"TulsiPot"},{type:"box",minX:-9.8,maxX:-8.6,minZ:-3.4,maxZ:-2.2,name:"JunkPile"},{type:"box",minX:16.5,maxX:19.5,minZ:-4.8,maxZ:-3.2,name:"ChaiStall"},{type:"box",minX:2,maxX:78,minZ:-10,maxZ:-4.4,name:"NorthBuildings"},{type:"box",minX:-16,maxX:94,minZ:3.2,maxZ:10,name:"SouthRailing"},{type:"box",minX:79.6,maxX:80.6,minZ:-6,maxZ:-1.35,name:"PalaceWallLeft"},{type:"box",minX:79.6,maxX:80.6,minZ:1.35,maxZ:6,name:"PalaceWallRight"},{type:"box",minX:83,maxX:95,minZ:-6,maxZ:6,name:"PalaceBackBoundary"},{type:"box",minX:43.6,maxX:48,minZ:-6.5,maxZ:-3.3,name:"FootpathRubble"}],this.dazedGuy=oe.createDazedCharacter(),this.dazedGuy.visible=!1,this.scene.add(this.dazedGuy),this.isAccident=!1,this.shakeDuration=0,this.initExhaustParticles(),this.initSplashParticles(),this.initConfetti()}initSplashParticles(){this.splashParticles=[];const t=new Ui(.12,0),e=[3718648,165063,8246268,7877903,4528643];for(let n=0;n<40;n++){const i=new Wt({color:e[n%e.length],transparent:!0,opacity:.85}),a=new E(t,i);a.visible=!1,this.scene.add(a),this.splashParticles.push({mesh:a,life:0,maxLife:1,vel:new L})}}emitWaterSplash(t){if(this.splashParticles)for(let e=0;e<35;e++){const n=this.splashParticles.find(r=>!r.mesh.visible);if(!n)break;n.mesh.position.set(t.x+(Math.random()-.5)*1.2,t.y+.15,t.z+(Math.random()-.5)*1.2),n.mesh.visible=!0,n.life=0,n.maxLife=.8+Math.random()*.6;const i=Math.random()*Math.PI*2,a=2.2+Math.random()*4.5;n.vel.set(Math.cos(i)*a*.6,3.8+Math.random()*4.2,Math.sin(i)*a*.6),n.mesh.scale.setScalar(.7+Math.random()*.8)}}initExhaustParticles(){this.particles=[];const t=new Nt(.12,6,6),e=new Wt({color:13751771,transparent:!0,opacity:.6});for(let n=0;n<20;n++){const i=new E(t,e);i.visible=!1,this.scene.add(i),this.particles.push({mesh:i,life:0,maxLife:1,vel:new L})}}emitSmoke(t){const e=this.particles.find(n=>!n.mesh.visible);e&&(e.mesh.position.copy(t),e.mesh.visible=!0,e.life=0,e.maxLife=.6+Math.random()*.4,e.mesh.scale.setScalar(.4),e.vel.set(-1.5-Math.random()*1.5,.4+Math.random()*.5,(Math.random()-.5)*.6))}initConfetti(){this.confetti=[];const t=[15680580,16096779,1096065,3900150,9133302,15485081];for(let e=0;e<90;e++){const n=new ae(.18,.12),i=new Wt({color:t[e%t.length],side:qe}),a=new E(n,i);a.visible=!1,this.scene.add(a),this.confetti.push({mesh:a,vel:new L,rotVel:new L,active:!1})}}burstConfetti(t){this.confetti.forEach(e=>{e.mesh.position.set(t.x+(Math.random()-.5)*4,t.y+3.5+Math.random()*2,t.z+(Math.random()-.5)*4),e.vel.set((Math.random()-.5)*6,2+Math.random()*4,(Math.random()-.5)*6),e.rotVel.set(Math.random()*8,Math.random()*8,Math.random()*8),e.mesh.visible=!0,e.active=!0})}getColliders(){const t=[...this.staticColliders];return!this.isRiding&&this.scooter&&t.push({type:"box",minX:this.scooter.position.x-1.15,maxX:this.scooter.position.x+1.15,minZ:this.scooter.position.z-.55,maxZ:this.scooter.position.z+.55,name:"Scooter"}),this.cow&&t.push({type:"circle",x:this.cow.position.x,z:this.cow.position.z,radius:1.45,name:"Cow"}),t}initUI(){this.meterFill=document.getElementById("jugaad-bar-fill"),this.meterPercent=document.getElementById("meter-percent"),this.questText=document.getElementById("quest-text"),this.dialogueBox=document.getElementById("dialogue-box"),this.dialogueSpeaker=document.getElementById("dialogue-speaker"),this.dialogueText=document.getElementById("dialogue-text"),this.promptTip=document.getElementById("prompt-text"),this.jugaadPopup=document.getElementById("jugaad-popup"),this.victoryModal=document.getElementById("victory-modal"),this.questText&&(this.questText.textContent="📞 Chachi ka urgent call suniye..."),this.initRadialWheel()}showDialogue(t,e){if("speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}this.dialogueSpeaker.textContent=`🗣️ ${t}`,this.dialogueText.textContent=`"${e}"`,this.dialogueBox.style.display="block",clearTimeout(this.dialogueTimeout),this.dialogueTimeout=setTimeout(()=>{this.dialogueBox.style.display="none"},5500)}triggerJugaadToast(t){this.jugaadPopup.textContent=t,this.jugaadPopup.classList.add("show"),ct.playJugaadSuccess(),setTimeout(()=>{this.jugaadPopup.classList.remove("show")},2800)}updateMeter(t){this.meter=Math.min(100,t),this.meterFill.style.width=`${this.meter}%`,this.meterPercent.textContent=`${this.meter}%`}startCutscene(){this.isCutscene=!0,this.cutsceneTime=0,this.cutscenePhase=1,this.phoneDropped=!1,this.keys={left:!1,right:!1,up:!1,down:!1},this.fallingPhoneMesh&&(this.fallingPhoneMesh.visible=!1),this.phoneScreenItem&&(this.phoneScreenItem.visible=!1),this.phoneBackItem&&(this.phoneBackItem.visible=!1),this.scooter&&this.scooter.userData.setFallenState&&this.scooter.userData.setFallenState(!1),this.chachaHome&&this.chachaHome.userData.closeDoors(),this.player.position.set(-6,.32,-4.6),this.player.visible=!1,this.player.userData.setPhoneCallPose&&this.player.userData.setPhoneCallPose(!1),this.junkPile&&this.junkPile.userData&&this.junkPile.userData.labelMesh&&(this.junkPile.userData.labelMesh.visible=!1);const t=document.getElementById("ui-overlay");t&&(t.style.display="none"),this.promptTip&&(this.promptTip.innerHTML="");const e=document.getElementById("cutscene-overlay");e&&(e.style.display="flex",e.style.opacity="1");const n=document.getElementById("cutscene-speaker-title"),i=document.getElementById("cutscene-text");n&&(n.textContent="👰 Chachi (Sheesh Mahal Mandap)"),i&&(i.textContent='"Arey suno! Baaraat dwar par khadi hai! Pandit ji gusse me hain! Guddu ka dulha sehra leke turant aao!"'),ct.playPhoneRing(),this.camera.position.set(72.2,1.85,2.8),this.camera.lookAt(77.8,1.25,.3)}endCutscene(){if(!this.isCutscene)return;this.isCutscene=!1,this.timerRunning=!0,this.updateTimerDisplay();const t=document.getElementById("ui-overlay");t&&(t.style.display="flex"),this.junkPile&&this.junkPile.userData&&this.junkPile.userData.labelMesh&&(this.junkPile.userData.labelMesh.visible=!0),this.chachaHome&&this.chachaHome.userData.openDoors(),this.phoneScreenItem&&(this.phoneScreenItem.visible=!0),this.phoneBackItem&&(this.phoneBackItem.visible=!0),this.fallingPhoneMesh&&(this.fallingPhoneMesh.visible=!1),this.player.position.set(-5.8,.32,-3),this.player.rotation.y=.2,this.player.visible=!0,this.player.userData.setPhoneCallPose&&this.player.userData.setPhoneCallPose(!1),this.player.userData.rightArmPivot&&this.player.userData.rightArmPivot.rotation.set(0,0,0),this.player.userData.leftArmPivot&&this.player.userData.leftArmPivot.rotation.set(0,0,0),this.player.userData.leftLegPivot&&this.player.userData.leftLegPivot.rotation.set(0,0,0),this.player.userData.rightLegPivot&&this.player.userData.rightLegPivot.rotation.set(0,0,0),this.player.userData.headGroup&&this.player.userData.headGroup.rotation.set(0,0,0);const e=document.getElementById("cutscene-overlay");e&&(e.style.opacity="0",setTimeout(()=>{e.style.display="none",e.style.opacity="1"},400)),this.camera.position.set(-3.2,2.1,.2),this.camera.lookAt(-6,1.25,-3.4),this.questText.textContent="Toota phone theek karein aur Chetak scooter par sawar hon!",this.promptTip.innerHTML="✨ Toota Phone uthayein [E] ya Kabaad Dher se tool chunein!"}setStage(t){this.stage=t;try{sessionStorage.setItem("bhopali_stage",t.toString())}catch{}}resumeInGameSession(){const t=parseInt(sessionStorage.getItem("bhopali_stage")||"0",10);this.stage=t,this.isCutscene=!1,this.timerRunning=!0,this.updateTimerDisplay();const e=document.getElementById("ui-overlay");e&&(e.style.display="flex"),this.junkPile&&this.junkPile.userData&&this.junkPile.userData.labelMesh&&(this.junkPile.userData.labelMesh.visible=!0);const n=document.getElementById("cutscene-overlay");n&&(n.style.display="none"),ct.init(),ct.musicPlaying||ct.startDesiBGM(),t===0?(this.updateMeter(0),this.chachaHome&&this.chachaHome.userData.openDoors(),this.player.position.set(-5.8,.32,-3),this.player.rotation.set(0,.2,0),this.player.visible=!0,this.player.userData.setPhoneCallPose&&this.player.userData.setPhoneCallPose(!1),this.phoneScreenItem&&(this.phoneScreenItem.visible=!0),this.phoneBackItem&&(this.phoneBackItem.visible=!0),this.fallingPhoneMesh&&(this.fallingPhoneMesh.visible=!1),this.camera.position.set(-3.2,2.1,.2),this.camera.lookAt(-6,1.25,-3.4),this.questText.textContent="Toota phone theek karein aur Chetak scooter par sawar hon!",this.promptTip.innerHTML="✨ Toota Phone uthayein [E] ya baayin taraf Kabaad Dher se tool chunein!"):t===1?(this.updateMeter(25),this.chachaHome&&this.chachaHome.userData.openDoors(),this.player.position.set(-1.5,0,.5),this.player.visible=!0,this.scooter.userData.riderMesh.visible=!1,this.camera.position.set(1.5,2.4,7.5),this.camera.lookAt(0,1.3,0),this.questText.textContent="Sadak par 2m gehra gaddha hai! Lakdi ka phatta lagakar pull banayein!",this.promptTip.innerHTML="✨ Press <b>[E]</b> to Kickstart & Mount Chetak Scooter!"):t===2?(this.updateMeter(50),this.chachaHome&&this.chachaHome.userData.openDoors(),this.plankPlaced=!0,this.trenchEncountered=!0,this.isRiding=!0,this.player.visible=!1,this.scooter.userData.riderMesh.visible=!0,this.scooter.position.set(49,0,0),this.camera.position.set(53.5,2.2,8.8),this.camera.lookAt(51,1.4,0),this.questText.textContent="Gau Mata sadak par aaram kar rahi hain! Taazi ghaas khilayein!",this.promptTip.innerHTML="Gau Mata ke paas badhein | Watch road!"):t===3?(this.updateMeter(75),this.chachaHome&&this.chachaHome.userData.openDoors(),this.plankPlaced=!0,this.trenchEncountered=!0,this.cow.userData.isDistracted=!0,this.cow.userData.state="eating",this.isRiding=!0,this.player.visible=!1,this.scooter.userData.riderMesh.visible=!0,this.scooter.position.set(64,0,0),this.camera.position.set(68.5,2.2,8.8),this.camera.lookAt(66,1.4,0),this.questText.textContent="Full throttle bhagao! Sheesh Mahal gate ke bahar VIP Parking me lagao!",this.promptTip.innerHTML="🅿️ VIP Parking Bay me Chetak park karein!"):t===4?(this.updateMeter(75),this.chachaHome&&this.chachaHome.userData.openDoors(),this.isRiding=!1,this.scooter.position.set(74,0,-2.2),this.scooter.userData.setFallenState(!0),this.scooter.userData.riderMesh.visible=!1,this.parkingArrow&&(this.parkingArrow.visible=!1),this.player.position.set(73.2,0,-1.2),this.player.visible=!0,this.camera.position.set(76.5,2.1,7.8),this.camera.lookAt(74.5,1.25,-1.8),this.questText.textContent="Chetak ka stand toot gaya! Deewal ke paas pade samaan se scooter ko khada karein!",this.promptTip.innerHTML="Deewal ke paas dekhein [E] | Chetak ko khada karein!"):(this.setStage(0),this.resumeInGameSession())}triggerTrenchFall(t){this.isFalling||(this.isFalling=!0,this.trenchLanded=!1,this.trenchFallVel=-1.2,this.trenchTargetX=45.8,t&&(this.scooterSpeed=0,ct.stopScooterEngine()))}initRadialWheel(){this.radialWheelModal=document.getElementById("radial-wheel-modal");const t=document.getElementById("radial-hub-icon"),e=document.getElementById("radial-hub-name"),n=document.getElementById("radial-hub-score"),i={rubber:{icon:"🟡",name:"Mithai Rubber Band",score:"⭐ 100% Best Jugaad (+300 Swag Score)"},hammer:{icon:"🔨",name:"Bhari Desi Hathoda",score:"⚠️ High Risk! Phone Chur-Chur (-200)"},rope:{icon:"🪢",name:"Moti Jute Ki Rassi",score:"❌ Too Thick! Jeb me nahi aayegi"},tape:{icon:"🩹",name:"Chupkaoo Cello Tape",score:"⭐ OK Jugaad (+100 Swag / Kam Score)"}},a=(o,c)=>{const l=document.getElementById(o);l&&(l.addEventListener("mouseenter",()=>{const u=i[c];t&&(t.textContent=u.icon),e&&(e.textContent=u.name),n&&(n.textContent=u.score)}),l.addEventListener("click",u=>{u.stopPropagation(),this.selectJunkTool(c)}))};a("btn-radial-rubber","rubber"),a("btn-radial-hammer","hammer"),a("btn-radial-rope","rope"),a("btn-radial-tape","tape");const r=document.getElementById("btn-close-wheel");r&&r.addEventListener("click",o=>{o.stopPropagation(),this.closeRadialWheel()}),window.addEventListener("keydown",o=>{this.radialWheelModal&&this.radialWheelModal.style.display==="flex"&&(o.key==="1"?this.selectJunkTool("rubber"):o.key==="2"?this.selectJunkTool("hammer"):o.key==="3"?this.selectJunkTool("rope"):o.key==="4"?this.selectJunkTool("tape"):o.key==="Escape"&&this.closeRadialWheel())})}openRadialWheel(){if(this.radialWheelModal){const e=new L(-10.8,3.1,-3.9).clone().project(this.camera);if(e.z<1){const n=(e.x*.5+.5)*window.innerWidth,i=(-e.y*.5+.5)*window.innerHeight;this.radialWheelModal.style.left=`${n}px`,this.radialWheelModal.style.top=`${i}px`}this.radialWheelModal.style.display="flex",ct.init()}}closeRadialWheel(){this.radialWheelModal&&(this.radialWheelModal.style.display="none")}selectJunkTool(t){if(this.closeRadialWheel(),ct.init(),this.inventory&&this.inventory.userData.isPhone){if(t==="rubber"){this.player.remove(this.inventory),this.inventory=null,this.player.userData.leftArmPivot&&this.player.userData.rightArmPivot&&(this.player.userData.leftArmPivot.rotation.set(0,0,0),this.player.userData.rightArmPivot.rotation.set(0,0,0)),this.setStage(1),this.updateMeter(25),this.addScore(300,3),ct.playPhoneRebootSound(),ct.playJugaadSuccess(),this.triggerJugaadToast("🎉 JUGAAD 1: RUBBER BAND SE PHONE REPAIRED! (+300 PTS)"),this.questText.textContent="Phone jeb me rakh liya! Chetak Scooter par baitho [E] aur VIP Road Sheesh Mahal ki taraf nikal pado!",this.promptTip.innerHTML="Press <b>[E]</b> near Chetak Scooter to Kickstart & Mount!";return}else if(t==="tape"){this.player.remove(this.inventory),this.inventory=null,this.player.userData.leftArmPivot&&this.player.userData.rightArmPivot&&(this.player.userData.leftArmPivot.rotation.set(0,0,0),this.player.userData.rightArmPivot.rotation.set(0,0,0)),this.setStage(1),this.updateMeter(25),this.addScore(100,1),ct.playTapeSound(),ct.playPhoneRebootSound(),ct.playJugaadSuccess(),this.triggerJugaadToast("🩹 JUGAAD 1: TAPE SE PHONE JUD GAYA! (+100 PTS)"),this.questText.textContent="Phone jeb me rakh liya! Chetak Scooter par baitho [E] aur VIP Road Sheesh Mahal ki taraf nikal pado!",this.promptTip.innerHTML="Press <b>[E]</b> near Chetak Scooter to Kickstart & Mount!";return}else if(t==="rope"){ct.playBrickThud(),this.addScore(-50,0),this.spawnFloatingScore("⚠️ -50 SWAG! TOO THICK!",this.player.position),this.promptTip.innerHTML="⚠️ Rassi bahut moti hai! Kabaad Dher [E] se patla jugaad chuno!";return}else if(t==="hammer"){this.triggerHammerDisaster();return}}this.inventory&&(this.player.remove(this.inventory),this.inventory=null);let e=null;t==="rubber"?e=oe.createMithaiRubberBand():t==="hammer"?e=oe.createHammerItem():t==="rope"?e=oe.createThickRope():t==="tape"&&(e=oe.createCelloTapeItem()),e&&(this.inventory=e,this.player.add(e),e.position.set(0,1.28,.56),e.rotation.set(.35,0,0),this.player.userData.leftArmPivot&&this.player.userData.rightArmPivot&&(this.player.userData.leftArmPivot.rotation.set(-1.25,-.15,-.22),this.player.userData.rightArmPivot.rotation.set(-1.25,.15,.22)),ct.playBrickThud(),this.promptTip.innerHTML=`Carrying: <b>${e.userData.title}</b>. Toota Phone ke paas jakar [E] dabayein!`)}triggerHammerDisaster(){ct.playHammerSmashPhone(),this.shakeDuration=.65;const t=this.inventory&&this.inventory.userData.isPhone?new L(this.player.position.x,.32,this.player.position.z):this.phoneCurrentPos||new L(-5.8,.32,-3.4);this.inventory&&this.inventory.userData.isPhone&&(this.player.remove(this.inventory),this.inventory=null),[this.phoneScreenItem,this.phoneBackItem].forEach(e=>{e&&(this.scene.remove(e),this.items=this.items.filter(n=>n!==e))}),this.smashedPhoneMesh&&this.scene.remove(this.smashedPhoneMesh),this.smashedPhoneMesh=oe.createSmashedPhoneDebris(),this.smashedPhoneMesh.position.set(t.x,.32,t.z),this.scene.add(this.smashedPhoneMesh),this.deductLife("Hathoda se phone chur-chur kar diya! (-1 Heart)"),this.addScore(-200,0),this.spawnFloatingScore("💥 -200 SWAG POINTS! PHONE CHUR-CHUR!",new L(t.x,1.2,t.z)),this.triggerJugaadToast("💥 DISASTER! PHONE PAR HATHODA MAAR DIYA! (-200 PTS)"),this.player.userData.leftArmPivot&&this.player.userData.rightArmPivot&&(this.player.userData.leftArmPivot.rotation.set(-2.2,.35,-.65),this.player.userData.rightArmPivot.rotation.set(-2.2,-.35,.65)),this.player.userData.headGroup&&(this.player.userData.headGroup.rotation.x=.3),setTimeout(()=>{if(this.lives<=0)return;this.smashedPhoneMesh&&(this.scene.remove(this.smashedPhoneMesh),this.smashedPhoneMesh=null);const e=t.x<-8?t.x+.8:t.x,n=t.z<-2.4?t.z+.7:t.z;this.phoneCurrentPos=new L(e,.32,n),this.phoneScreenItem.position.set(e,.32,n),this.phoneScreenItem.visible=!0,this.scene.add(this.phoneScreenItem),this.items.push(this.phoneScreenItem),this.phoneBackItem.position.set(e-.25,.32,n+.15),this.phoneBackItem.visible=!0,this.scene.add(this.phoneBackItem),this.player.userData.leftArmPivot&&this.player.userData.rightArmPivot&&(this.player.userData.leftArmPivot.rotation.set(0,0,0),this.player.userData.rightArmPivot.rotation.set(0,0,0)),this.player.userData.headGroup&&this.player.userData.headGroup.rotation.set(0,0,0),this.promptTip.innerHTML="⚠️ Kabaad Dher [E] ke paas jayein | Rubber Band ya Cello Tape chuno!"},2800)}spawnFloatingScore(t,e){const n=document.getElementById("floating-score-container");if(!n)return;const i=e.clone();i.project(this.camera);const a=(i.x*.5+.5)*window.innerWidth,r=(-(i.y*.5)+.5)*window.innerHeight,o=document.createElement("div");o.className="floating-score",o.textContent=t,o.style.left=`${a}px`,o.style.top=`${r}px`,n.appendChild(o),setTimeout(()=>{o.parentNode&&o.parentNode.removeChild(o)},1100)}setupEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),window.addEventListener("keydown",I=>{if(ct.init(),ct.musicPlaying||ct.startDesiBGM(),this.isCutscene){(I.code==="Space"||I.code==="Enter"||I.code==="Escape")&&this.endCutscene();return}(I.code==="ArrowLeft"||I.code==="KeyA")&&(this.keys.left=!0),(I.code==="ArrowRight"||I.code==="KeyD")&&(this.keys.right=!0),(I.code==="ArrowUp"||I.code==="KeyW")&&(this.keys.up=!0),(I.code==="ArrowDown"||I.code==="KeyS")&&(this.keys.down=!0),I.code==="KeyE"&&this.handleAction(),(I.code==="Space"||I.code==="KeyH")&&ct.playHorn()});const t=document.getElementById("btn-skip-cutscene");t&&t.addEventListener("click",I=>{I.stopPropagation(),this.endCutscene()}),window.addEventListener("keyup",I=>{this.isCutscene||((I.code==="ArrowLeft"||I.code==="KeyA")&&(this.keys.left=!1),(I.code==="ArrowRight"||I.code==="KeyD")&&(this.keys.right=!1),(I.code==="ArrowUp"||I.code==="KeyW")&&(this.keys.up=!1),(I.code==="ArrowDown"||I.code==="KeyS")&&(this.keys.down=!1))});const e=(I,H)=>{const z=document.getElementById(I);z&&(z.addEventListener("pointerdown",q=>{q.stopPropagation(),!this.isCutscene&&(ct.init(),ct.musicPlaying||ct.startDesiBGM(),this.keys[H]=!0)}),z.addEventListener("pointerup",q=>{q.stopPropagation(),this.keys[H]=!1}),z.addEventListener("pointerleave",q=>{q.stopPropagation(),this.keys[H]=!1}))};e("btn-up","up"),e("btn-down","down"),e("btn-left","left"),e("btn-right","right");const n=document.getElementById("btn-e");n&&n.addEventListener("pointerdown",I=>{I.stopPropagation(),!this.isCutscene&&(ct.init(),ct.musicPlaying||ct.startDesiBGM(),this.handleAction())});const i=document.getElementById("btn-honk");i&&i.addEventListener("pointerdown",I=>{I.stopPropagation(),!this.isCutscene&&(ct.init(),ct.playHorn())}),window.addEventListener("pointerdown",I=>{if(I.target.tagName==="BUTTON")return;const H=document.getElementById("landing-screen"),z=document.getElementById("intro-screen"),q=document.getElementById("radial-wheel-modal");H&&H.style.display!=="none"||z&&z.style.display!=="none"||q&&q.style.display==="flex"||(ct.init(),ct.musicPlaying||ct.startDesiBGM(),this.handleAction())});const a=document.getElementById("btn-replay");a&&a.addEventListener("click",()=>{sessionStorage.removeItem("bhopali_stage"),sessionStorage.setItem("bhopali_in_game","true"),sessionStorage.setItem("bhopali_restart_flow","intro_conversation"),sessionStorage.setItem("bhopali_skip_flight","true"),window.location.reload()});const r=document.getElementById("btn-accident-respawn");r&&r.addEventListener("click",()=>{if(this.lives>0)this.resetAfterAccident();else{const I=document.getElementById("accident-modal");I&&(I.style.display="none"),this.triggerGameOver("Gau Mata se takkar maar di aur 3 galtiyan ho gayin!")}});const o=document.getElementById("btn-restart-game");o&&o.addEventListener("click",()=>{sessionStorage.removeItem("bhopali_stage"),sessionStorage.setItem("bhopali_in_game","true"),sessionStorage.setItem("bhopali_restart_flow","intro_conversation"),sessionStorage.setItem("bhopali_skip_flight","true"),window.location.reload()});const c=document.getElementById("btn-game-over-home");c&&c.addEventListener("click",()=>{sessionStorage.removeItem("bhopali_stage"),sessionStorage.removeItem("bhopali_in_game"),sessionStorage.removeItem("bhopali_restart_flow"),sessionStorage.setItem("bhopali_skip_flight","true"),window.location.reload()}),this.initStats();const l=sessionStorage.getItem("bhopali_in_game")==="true",u=sessionStorage.getItem("bhopali_skip_flight")==="true";u&&sessionStorage.removeItem("bhopali_skip_flight");const d=document.getElementById("intro-screen"),p=document.getElementById("flying-plane");if(l||u)d&&(d.style.display="none");else if(d&&p){const I={x:-.22,y:.26},H={x:.22,y:.64},z={x:.54,y:.66},q={x:1.2,y:-.2},j=300,V=[],it=[];for(let ht=0;ht<=j;ht++){const st=ht/j,vt=1-st,It=vt*vt*vt*I.x+3*vt*vt*st*H.x+3*vt*st*st*z.x+st*st*st*q.x,Ft=vt*vt*vt*I.y+3*vt*vt*st*H.y+3*vt*st*st*z.y+st*st*st*q.y,U=3*vt*vt*(H.x-I.x)+6*vt*st*(z.x-H.x)+3*st*st*(q.x-z.x),re=3*vt*vt*(H.y-I.y)+6*vt*st*(z.y-H.y)+3*st*st*(q.y-z.y);V.push({x:It,y:Ft}),it.push({dx:U,dy:re})}const nt=[0];let dt=0;for(let ht=1;ht<V.length;ht++)dt+=Math.hypot(V[ht].x-V[ht-1].x,V[ht].y-V[ht-1].y),nt.push(dt);const Ut=ht=>{const st=ht*dt;let vt=0,It=nt.length-1;for(;vt<It;){const A=vt+It>>1;nt[A]<st?vt=A+1:It=A}const Ft=Math.max(1,vt),U=nt[Ft]-nt[Ft-1]||1e-6,re=(st-nt[Ft-1])/U,Bt=V[Ft-1].x+re*(V[Ft].x-V[Ft-1].x),Gt=V[Ft-1].y+re*(V[Ft].y-V[Ft-1].y),Mt=it[Ft-1].dx+re*(it[Ft].dx-it[Ft-1].dx),Kt=it[Ft-1].dy+re*(it[Ft].dy-it[Ft-1].dy),wt=Math.atan2(Kt,Mt)*180/Math.PI+29.3;return{x:Bt,y:Gt,angle:wt}};let lt=null;const B=2400,Y=ht=>{lt||(lt=ht);const st=ht-lt,vt=Math.min(1,st/B),It=Ut(vt),Ft=window.innerWidth,U=window.innerHeight,re=It.x*Ft,Bt=It.y*U,Gt=-It.angle*.32,Mt=Math.sin(vt*Math.PI)*10,Kt=.72+vt*.58;p.style.left=`${re}px`,p.style.top=`${Bt}px`,p.style.transform=`translate(-50%, -50%) perspective(800px) rotateZ(${It.angle}deg) rotateY(${Gt}deg) rotateX(${Mt}deg) scale(${Kt})`,p.style.opacity=vt<.04?`${vt/.04}`:vt>.94?`${(1-vt)/.06}`:"1",vt<1?requestAnimationFrame(Y):(ct.stopPlaneWhoosh(),d.style.opacity="0",d.style.transition="opacity 0.6s ease",setTimeout(()=>{d.style.display="none"},600))};let ut=!1;const rt=ht=>{if(ut)return;ut=!0,ht&&ht.stopPropagation&&ht.stopPropagation(),d.removeEventListener("pointerdown",rt),window.removeEventListener("keydown",At);const st=document.getElementById("intro-launch-prompt");st&&(st.style.opacity="0",st.style.transition="opacity 0.2s ease",setTimeout(()=>{st.style.display="none"},220)),ct.init(),ct.playPlaneWhoosh(),requestAnimationFrame(Y)},At=ht=>{(ht.code==="Space"||ht.code==="Enter")&&rt(ht)};d.addEventListener("pointerdown",rt),window.addEventListener("keydown",At)}const m=document.getElementById("btn-toggle-sound");m&&m.addEventListener("click",I=>{I.stopPropagation();const H=ct.toggleMute();m.textContent=H?"🔇":"🔊",m.title=H?"Unmute Sound":"Mute Sound"});const _=document.getElementById("landing-screen"),g=document.getElementById("settings-modal"),f=()=>{sessionStorage.setItem("bhopali_in_game","true"),this.setStage(0),_&&(_.style.display="none"),this.lives=3,this.updateLivesDisplay(),this.gameTimer=180,this.timerRunning=!1,this.updateTimerDisplay(),this.currentRunScore=0,this.isGameOver=!1;const I=document.getElementById("hud-run-score");I&&(I.textContent="0"),ct.init(),ct.musicPlaying||ct.startDesiBGM(),this.startCutscene()};sessionStorage.getItem("bhopali_restart_flow")==="intro_conversation"?(sessionStorage.removeItem("bhopali_restart_flow"),_&&(_.style.display="none"),f()):l&&(_&&(_.style.display="none"),this.resumeInGameSession());const S=document.getElementById("btn-back-home");S&&S.addEventListener("click",()=>{sessionStorage.removeItem("bhopali_in_game"),sessionStorage.removeItem("bhopali_stage");const I=document.getElementById("ui-overlay");I&&(I.style.display="none"),_&&(_.style.display="flex"),this.timerRunning=!1,this.initStats(),ct.stopScooterEngine(),this.isRiding&&(this.isRiding=!1,this.scooterSpeed=0,this.player.visible=!0,this.scooter.userData.riderMesh.visible=!1)});const T=document.getElementById("btn-start-game");T&&T.addEventListener("click",f);const x=document.getElementById("btn-open-settings");x&&x.addEventListener("click",()=>{g&&(g.style.display="flex")});const D=document.getElementById("btn-close-settings");D&&D.addEventListener("click",()=>{g&&(g.style.display="none")});const b=document.getElementById("btn-tab-controls"),P=document.getElementById("btn-tab-tech"),C=document.getElementById("btn-tab-team"),v=document.getElementById("tab-content-controls"),M=document.getElementById("tab-content-tech"),R=document.getElementById("tab-content-team"),k=(I,H)=>{[b,P,C].forEach(z=>z&&z.classList.remove("active")),[v,M,R].forEach(z=>z&&(z.style.display="none")),I&&I.classList.add("active"),H&&(H.style.display="block")};b&&b.addEventListener("click",()=>k(b,v)),P&&P.addEventListener("click",()=>k(P,M)),C&&C.addEventListener("click",()=>k(C,R))}initStats(){let t=localStorage.getItem("bhopali_stars")||"3",e=localStorage.getItem("bhopali_total_swag")||localStorage.getItem("bhopali_swag")||"1000",n=localStorage.getItem("bhopali_high_score")||"0";const i=document.getElementById("top-stars"),a=document.getElementById("top-score"),r=document.getElementById("top-high-score");i&&(i.textContent=t),a&&(a.textContent=e),r&&(r.textContent=n),this.updateLivesDisplay(),this.updateTimerDisplay()}updateLivesDisplay(){const t=document.getElementById("lives-display");if(!t)return;let e="";for(let n=0;n<3;n++)e+=n<this.lives?"❤️":"🖤";t.textContent=e}updateTimerDisplay(){const t=document.getElementById("timer-display"),e=document.getElementById("timer-display-badge");if(!t)return;const n=Math.floor(this.gameTimer/60),i=Math.floor(this.gameTimer%60);t.textContent=`${String(n).padStart(2,"0")}:${String(i).padStart(2,"0")}`,e&&(this.gameTimer<=30&&this.gameTimer>0?(e.style.borderColor="#ef4444",e.style.boxShadow="0 0 20px rgba(239, 68, 68, 0.85)",e.style.color="#fca5a5"):(e.style.borderColor="#f59e0b",e.style.boxShadow="0 4px 15px rgba(245, 158, 11, 0.35)",e.style.color="#fef08a"))}deductLife(t="Galti ho gayi!"){this.isGameOver||(this.lives=Math.max(0,this.lives-1),this.updateLivesDisplay(),this.shakeDuration=.5,this.lives<=0&&setTimeout(()=>{this.triggerGameOver("3 Galtiyan ho gayin! Shaadi ka shubh muhurat nikal gaya aur Chetak raste me phas gayi!")},850))}triggerGameOver(t){if(this.isGameOver)return;this.isGameOver=!0,this.timerRunning=!1,this.scooterSpeed=0,ct.stopScooterEngine(),ct.playMetalCrash();const e=document.getElementById("accident-modal");e&&(e.style.display="none");const n=document.getElementById("game-over-modal"),i=document.getElementById("game-over-reason");i&&(i.textContent=t),n&&(n.style.display="flex")}addScore(t,e=0){this.currentRunScore=Math.max(0,this.currentRunScore+t);const n=document.getElementById("hud-run-score");if(n&&(n.textContent=this.currentRunScore),e>0){let i=parseInt(localStorage.getItem("bhopali_stars")||"3",10);i=Math.min(12,i+e),localStorage.setItem("bhopali_stars",i.toString());const a=document.getElementById("top-stars");a&&(a.textContent=i)}}triggerCowAccident(){this.isAccident=!0,this.scooterSpeed=0,ct.stopScooterEngine(),ct.playTireScreech(),ct.playMetalCrash(),ct.playCowAlarmed(),this.shakeDuration=.55,this.deductLife("Gau Mata se takkar maar di! (-1 Heart)"),this.addScore(-150,0),this.spawnFloatingScore("💥 -150 SWAG! ACCIDENT!",this.scooter.position),this.scooter.userData.riderMesh.visible=!1,this.dazedGuy.position.set(this.scooter.position.x+2.5,0,this.scooter.position.z),this.dazedGuy.visible=!0,this.scooter.position.y=.35,this.scooter.rotation.z=-.55,this.scooter.rotation.x=-.65,this.cow.userData.headGroup&&(this.cow.userData.headGroup.rotation.x=-.3),this.triggerJugaadToast("💥 ACCIDENT! GAU MATA SE TAKKAR! (-1 HEART)");const t=document.getElementById("accident-modal");t&&this.lives>0&&setTimeout(()=>{t.style.display="flex"},1100)}resetAfterAccident(){const t=document.getElementById("accident-modal");t&&(t.style.display="none"),this.isAccident=!1,this.isRiding=!1,this.scooterSpeed=0,this.dazedGuy.visible=!1,this.scooter.position.set(55,0,0),this.scooter.rotation.set(0,0,0),this.scooter.userData.riderMesh.visible=!1,this.player.position.set(56,0,.5),this.player.visible=!0,this.player.rotation.set(0,0,0),ct.stopScooterEngine(),this.questText.textContent="Pehle Sabzi Market se Taazi Ghaas & Roti laao aur Gau Mata ko side karo!",this.promptTip.innerHTML="Walk to Grass Basket <b>[E]</b> | Feed Gau Mata before riding!"}handleAction(){if(this.isFalling||this.isCutscene)return;if(this.isRiding){const i=this.scooter.position.x>=71.8&&this.scooter.position.x<=76.2&&this.scooter.position.z<=-1.1&&this.scooter.position.z>=-3.3;if(this.stage===3&&i){this.setStage(4),this.isRiding=!1,this.scooterSpeed=0,this.scooter.userData.riderMesh.visible=!1,ct.stopScooterEngine(),ct.playPlankSnap(),ct.playBrickThud(),this.scooter.userData.setFallenState(!0),this.parkingArrow&&(this.parkingArrow.visible=!1),this.player.position.set(this.scooter.position.x-.7,0,this.scooter.position.z+1),this.player.rotation.set(0,.35,0),this.player.visible=!0,this.triggerJugaadToast("⚠️ KHATTT! CHETAK KA STAND TOOT GAYA!"),this.showDialogue("Chacha","Arey baap re! Chetak ka stand toot gaya! Ab kisi cheez ke sahare khada karna padega... Deewal ke paas kuch samaan pada hai, unse prayas karta hoon!"),this.questText.textContent="Chetak ka stand toot gaya! Deewal ke paas pade samaan se scooter ko khada karein!",this.promptTip.innerHTML="Deewal ke paas dekhein [E] | Chetak ko khada karein!";return}this.isRiding=!1,this.scooterSpeed=0,this.player.position.set(this.scooter.position.x,0,this.scooter.position.z+1.1),this.player.visible=!0,this.scooter.userData.riderMesh.visible=!1,ct.stopScooterEngine(),this.stage===3?this.promptTip.innerHTML="Dismounted. Pehle Chetak ko baayein VIP Parking Bay me mod kar le jaayein aur park karein!":this.promptTip.textContent="Dismounted scooter. Press [E] near scooter to mount again.";return}const t=this.player.position,e=t.distanceTo(this.scooter.position);if(e<3.2){if(this.stage===0){ct.playBrickThud(),this.triggerJugaadToast("🔒 Chetak Locked: Pehle toota phone repair karein!");return}if(!this.inventory&&this.stage<4){this.isRiding=!0,this.player.visible=!1,this.scooter.userData.riderMesh.visible=!0,ct.startScooterEngine(),this.questText.textContent="Dhyan se chalayein! Sadak par aage badhein!",this.promptTip.innerHTML="Drive [W/S/A/D] | [H/Space] Honk | [E] Dismount";return}}if(!this.inventory&&this.stage===4){let i=!1;if(this.items.forEach(a=>{Math.hypot(t.x-a.position.x,t.z-a.position.z)<2.5&&(i=!0)}),!i&&e<1.8){ct.playBrickThud(),this.promptTip.innerHTML="⚠️ Chetak zameen par giri hai! Deewal ke paas pade samaan [E] se khada karein!";return}}if(!this.inventory&&this.stage===0){const i=this.phoneCurrentPos||new L(-5.8,.32,-3.4);if(t.distanceTo(i)<2.5){this.inventory=this.phoneScreenItem,this.scene.remove(this.phoneScreenItem),this.items=this.items.filter(r=>r!==this.phoneScreenItem),this.phoneBackItem&&(this.phoneBackItem.visible=!1),this.player.add(this.inventory),this.inventory.position.set(0,1.28,.56),this.inventory.rotation.set(.35,0,0),this.player.userData.leftArmPivot&&this.player.userData.rightArmPivot&&(this.player.userData.leftArmPivot.rotation.set(-1.25,-.15,-.22),this.player.userData.rightArmPivot.rotation.set(-1.25,.15,.22)),ct.playBrickThud(),this.promptTip.innerHTML="Toota Phone haath me hai! Kabaad Dher [E] se tool chuno!";return}}if(t.distanceTo(new L(-9.2,.32,-2.8))<1.8){this.openRadialWheel();return}if(!this.inventory&&this.stage===1){let i=null,a=2.5;if([this.longPlankMesh,this.shortPlankMesh,this.placedPlankMesh].forEach(r=>{if(r&&r.parent===this.scene){const o=Math.hypot(t.x-r.position.x,t.z-r.position.z);o<a&&(a=o,i=r)}}),i){this.inventory=i,this.scene.remove(i),this.player.add(this.inventory),this.inventory.position.set(0,1.28,.56),this.inventory.rotation.set(.35,0,0),i===this.longPlankMesh?(this.longPlankPlaced=!1,this.longPlankMesh=null,this.plankPlaced=!1):i===this.shortPlankMesh&&(this.shortPlankPlaced=!1,this.shortPlankMesh=null),i===this.placedPlankMesh&&(this.placedPlankMesh=null,this.plankPlaced=this.longPlankPlaced),this.player.userData.leftArmPivot&&this.player.userData.rightArmPivot&&(this.player.userData.leftArmPivot.rotation.set(-1.25,-.15,-.22),this.player.userData.rightArmPivot.rotation.set(-1.25,.15,.22)),ct.playBrickThud(),this.promptTip.innerHTML=`Carrying: <b>${this.inventory.userData.title}</b>. Press [E] to place or drop!`;return}}if(!this.inventory){let i=null,a=2.8;if(this.items.forEach(r=>{const o=Math.hypot(t.x-r.position.x,t.z-r.position.z),c=Math.abs(t.y-r.position.y);o<a&&c<3.2&&(a=o,i=r)}),i){if(i.userData.type==="plank"||i.userData.type==="short_plank"){if(this.stage===0){ct.playBrickThud(),this.triggerJugaadToast("🔒 Phatta Locked: Pehle toota phone theek karein!");return}if(!this.trenchEncountered){ct.playBrickThud(),this.triggerJugaadToast("🔒 Phatta Locked: Pehle Chetak scooter chala kar sadak par aao!");return}}this.inventory=i,this.items=this.items.filter(o=>o!==i),this.scene.remove(i),this.player.add(i),i.position.set(0,1.28,.56),i.rotation.set(.35,0,0),this.player.userData.leftArmPivot&&this.player.userData.rightArmPivot&&(this.player.userData.leftArmPivot.rotation.set(-1.25,-.15,-.22),this.player.userData.rightArmPivot.rotation.set(-1.25,.15,.22)),ct.playBrickThud(),this.promptTip.innerHTML=`Carrying: <b>${i.userData.title}</b>. Press [E] to use or drop!`;return}}if(this.inventory){const i=this.inventory,a=this.phoneCurrentPos||new L(-5.8,.32,-3.4),r=t.distanceTo(a);if(this.stage===0&&r<2.8)if(i.userData.type==="rubber_band"){this.player.remove(i),this.inventory=null,[this.phoneScreenItem,this.phoneBackItem].forEach(u=>{u&&(this.scene.remove(u),this.items=this.items.filter(d=>d!==u))}),this.player.userData.leftArmPivot&&this.player.userData.rightArmPivot&&(this.player.userData.leftArmPivot.rotation.set(0,0,0),this.player.userData.rightArmPivot.rotation.set(0,0,0)),this.setStage(1),this.updateMeter(25),this.addScore(300,3),ct.playPhoneRebootSound(),ct.playJugaadSuccess(),this.triggerJugaadToast("🎉 JUGAAD 1: RUBBER BAND SE PHONE REPAIRED! (+300 PTS)"),this.questText.textContent="Phone jeb me rakh liya! Driveway me Chetak Scooter par baitho [E] aur Sheesh Mahal ki taraf nikal pado!",this.promptTip.innerHTML="Press <b>[E]</b> near Chetak Scooter to Kickstart & Mount!";return}else if(i.userData.type==="cello_tape")this.player.remove(i),this.inventory=null,[this.phoneScreenItem,this.phoneBackItem].forEach(u=>{u&&(this.scene.remove(u),this.items=this.items.filter(d=>d!==u))}),this.player.userData.leftArmPivot&&this.player.userData.rightArmPivot&&(this.player.userData.leftArmPivot.rotation.set(0,0,0),this.player.userData.rightArmPivot.rotation.set(0,0,0)),this.setStage(1),this.updateMeter(25),this.addScore(100,1),ct.playTapeSound(),ct.playPhoneRebootSound(),ct.playJugaadSuccess(),this.triggerJugaadToast("🩹 JUGAAD 1: TAPE SE PHONE JUD GAYA! (+100 PTS)"),this.questText.textContent="Phone jeb me rakh liya! Driveway me Chetak Scooter par baitho [E] aur Sheesh Mahal ki taraf nikal pado!",this.promptTip.innerHTML="Press <b>[E]</b> near Chetak Scooter to Kickstart & Mount!";else if(i.userData.type==="hammer"){this.triggerHammerDisaster();return}else if(i.userData.type==="rope"){this.addScore(-50,0),this.spawnFloatingScore("⚠️ -50 SWAG! TOO THICK!",t),this.promptTip.innerHTML="⚠️ Rassi bahut moti hai! Kabaad Dher [E] se patla jugaad chuno!";return}else{this.promptTip.innerHTML="⚠️ Is cheez se phone theek nahi hoga! Kabaad Dher [E] se tool chuno!";return}const o=Math.hypot(t.x-45.8,t.z);if(this.stage===1&&o<5)if(i.userData.type==="plank"){this.player.remove(i),this.scene.add(i),this.longPlankZ=Math.max(-2.4,Math.min(2.4,t.z)),this.plankZ=this.longPlankZ,i.position.set(45.8,.09,this.longPlankZ),i.rotation.set(0,0,0),this.longPlankPlaced=!0,this.longPlankMesh=i,this.plankPlaced=!0,this.placedPlankMesh=i,this.inventory=null,this.player.userData.leftArmPivot&&this.player.userData.rightArmPivot&&(this.player.userData.leftArmPivot.rotation.set(0,0,0),this.player.userData.rightArmPivot.rotation.set(0,0,0)),this.updateMeter(50),ct.playPlankSnap(),this.triggerJugaadToast("🎉 JUGAAD 2: TIMBER BRIDGE READY! (+25%)"),this.questText.textContent="Bridge taiyaar! Chetak par baitho [E] aur dhyan se phatte ke upar se niklo!",this.promptTip.innerHTML="Press <b>[E]</b> near scooter to mount | Drive across plank carefully!";return}else if(i.userData.type==="short_plank"){this.player.remove(i),this.scene.add(i),this.shortPlankZ=Math.max(-2.4,Math.min(2.4,t.z)),i.position.set(45.1,.09,this.shortPlankZ),i.rotation.set(0,0,0),this.shortPlankPlaced=!0,this.shortPlankMesh=i,this.inventory=null,this.player.userData.leftArmPivot&&this.player.userData.rightArmPivot&&(this.player.userData.leftArmPivot.rotation.set(0,0,0),this.player.userData.rightArmPivot.rotation.set(0,0,0)),ct.playPlankSnap(),this.promptTip.innerHTML="⚠️ Yeh phatta gaddhe se chhota hai! Dono kinaron par nahi tik paya!";return}else{this.promptTip.innerHTML="⚠️ Is cheez se bridge nahi banega! Lakdi ka phatta laayein!";return}const c=t.distanceTo(this.cow.position);if((this.stage===1||this.stage===2)&&c<3.6)if(i.userData.type==="grass"){this.player.remove(i),this.scene.add(i),i.position.set(62,0,-2.8),this.inventory=null,this.player.userData.leftArmPivot&&this.player.userData.rightArmPivot&&(this.player.userData.leftArmPivot.rotation.set(0,0,0),this.player.userData.rightArmPivot.rotation.set(0,0,0)),this.setStage(3),this.updateMeter(75),this.cow.userData.isDistracted=!0,this.cow.userData.state="moving",ct.playCowMoo(),this.addScore(250,1),this.spawnFloatingScore("+250 SWAG 🐮 GAU MATA KHUSH!",this.cow.position),this.triggerJugaadToast("🎉 JUGAAD 3: GAU MATA RASTA CLEAR! (+25%)"),this.questText.textContent="Gau Mata khush, rasta saaf! Chetak par baitho [E] aur Sheesh Mahal bhagao!",this.promptTip.innerHTML="Press <b>[E]</b> to Mount Scooter | Race to Sheesh Mahal!";return}else{this.promptTip.innerHTML="⚠️ Gau Mata isko nahi khayengi! Taazi Ghaas khilayein!";return}if(this.stage===4&&e<3.4)if(i.userData.type==="brick"){this.player.remove(i),this.scene.add(i),i.position.set(this.scooter.position.x-.42,.17,this.scooter.position.z-.42),this.scooter.userData.setFallenState(!1),this.inventory=null,this.player.userData.leftArmPivot&&this.player.userData.rightArmPivot&&(this.player.userData.leftArmPivot.rotation.set(0,0,0),this.player.userData.rightArmPivot.rotation.set(0,0,0)),this.setStage(5),this.updateMeter(100),ct.playBrickThud(),ct.playJugaadSuccess(),this.burstConfetti(this.scooter.position),this.addScore(500,1),this.triggerJugaadToast("🏆 JUGAAD 4: LAAL EENT KA SOLID STAND! (+25%)"),this.showDialogue("Chachi","Arey wah! Chetak shaahi style me khadi ho gayi aur Guddu ka sehra bhi bach gaya! Chalo ab jaldi mandap ke andar aao!"),this.questText.textContent="🌟 CONGRATULATIONS! Chacha & Chachi entering Sheesh Mahal!",this.promptTip.innerHTML="100% Desi Swag Champion! 🏆",this.isWeddingWalk=!0,this.weddingWalkTimer=0;return}else{this.player.remove(i),this.scene.add(i),i.position.set(this.scooter.position.x-.25,.08,this.scooter.position.z-.65),this.items.push(i),this.inventory=null,this.player.userData.leftArmPivot&&this.player.userData.rightArmPivot&&(this.player.userData.leftArmPivot.rotation.set(0,0,0),this.player.userData.rightArmPivot.rotation.set(0,0,0)),this.scooter.userData.setFallenState(!0),this.shakeDuration=.35,this.addScore(-50,0),this.spawnFloatingScore("❌ -50 SWAG! STAND TOOT GAYA!",this.scooter.position),i.userData.type==="broom"?(ct.playPlankSnap(),ct.playBrickThud(),this.promptTip.innerHTML="⚠️ Jhadu scooter ka wazan nahi sambhal payi aur toot gayi!"):i.userData.type==="tyre"?(ct.playSplash(),ct.playBrickThud(),this.promptTip.innerHTML="⚠️ Gol tyre fisal gaya aur scooter phir se gir gayi!"):(ct.playPlankSnap(),this.promptTip.innerHTML="⚠️ Yeh cheez scooter ka 100 kg wazan nahi jhel payi!"),this.triggerJugaadToast("❌ STAND TOOT GAYA! SCOOTER GIR GAYI!");return}this.player.remove(i),this.scene.add(i);const l=t.z<=-3.2?.3:.08;i.position.set(t.x,l,t.z),i.rotation.set(0,0,0),this.items.push(i),this.inventory=null,this.player.userData.leftArmPivot&&this.player.userData.rightArmPivot&&(this.player.userData.leftArmPivot.rotation.set(0,0,0),this.player.userData.rightArmPivot.rotation.set(0,0,0)),this.promptTip.textContent=`Dropped ${i.userData.title}.`;return}}animate(){requestAnimationFrame(this.animate);const t=.016,e=performance.now()*.002;if(this.isCutscene){this.cutsceneTime+=t;const i=this.cutsceneTime;if(i<2.8)this.camera.position.set(72.2,1.85,2.8),this.camera.lookAt(77.8,1.25,.3),this.chachi&&this.chachi.userData.headGroup&&(this.chachi.userData.headGroup.rotation.x=Math.sin(e*6)*.08,this.chachi.userData.headGroup.rotation.z=.12+Math.sin(e*4)*.05),this.chachi&&this.chachi.userData.phoneArmPivot&&(this.chachi.userData.phoneArmPivot.rotation.x=Math.sin(e*5)*.06);else if(i<4.8){const a=(i-2.8)/2,r=a*a*(3-2*a),o=Qt.lerp(72.2,-2.8,r),c=Qt.lerp(1.85,2.2,r),l=Qt.lerp(2.8,.8,r),u=Qt.lerp(77.8,-6,r),d=Qt.lerp(1.25,1.35,r),p=Qt.lerp(.3,-3.6,r);if(this.camera.position.set(o,c,l),this.camera.lookAt(u,d,p),this.cutscenePhase===1){this.cutscenePhase=2;const m=document.getElementById("cutscene-speaker-title"),_=document.getElementById("cutscene-text");m&&(m.textContent="🛵 Chacha (Mohalla Driveway)"),_&&(_.textContent='"Haan haan bhagyawan! Bas 5 minute me Chetak leke pohoch raha hoon!"')}}else if(i<7){this.chachaHome&&this.chachaHome.userData.openDoors(),this.player.visible=!0,this.player.userData.setPhoneCallPose&&this.player.userData.setPhoneCallPose(!0);const a=Math.min(1,(i-4.8)/.8),r=Qt.lerp(-4.6,-3.6,a);this.player.position.set(-6,.32,r),this.player.rotation.y=.2,a<1?this.player.userData.leftLegPivot&&(this.player.userData.leftLegPivot.rotation.x=Math.sin(a*Math.PI)*.3):(this.player.userData.leftLegPivot&&(this.player.userData.leftLegPivot.rotation.x=0),this.player.userData.rightLegPivot&&(this.player.userData.rightLegPivot.rotation.x=0)),this.player.userData.headGroup&&(this.player.userData.headGroup.rotation.x=Math.sin(e*5)*.06,this.player.userData.headGroup.rotation.z=-.06+Math.sin(e*3)*.03),this.player.userData.phoneArmGroup&&(this.player.userData.phoneArmGroup.rotation.x=Math.sin(e*4)*.04),this.player.userData.leftArmPivot&&(this.player.userData.leftArmPivot.rotation.x=Math.sin(i*4)*.12),this.camera.position.set(-3,2.1,.8),this.camera.lookAt(-6,1.35,-3.6)}else if(i<8.2){if(this.cutscenePhase===2){this.cutscenePhase=3;const r=document.getElementById("cutscene-speaker-title"),o=document.getElementById("cutscene-text");r&&(r.textContent="🛵 Chacha (Mohalla Verandah)"),o&&(o.textContent='"Chalo, phone jeb me daalta hoon aur nikalti sawaari..."')}const a=Math.min(1,(i-7)/1.1);this.player.userData.phoneArmGroup&&this.player.userData.phoneArmGroup.rotation.set(a*.85,-a*.45,a*.65),this.player.userData.headGroup&&(this.player.userData.headGroup.rotation.x=a*.25,this.player.userData.headGroup.rotation.z=-a*.15),this.camera.position.set(-3,2.1,.8),this.camera.lookAt(-6,1.35,-3.6)}else if(i<9){this.cutscenePhase===3&&(this.cutscenePhase=4,this.player.userData.setPhoneCallPose&&this.player.userData.setPhoneCallPose(!1),this.player.userData.rightArmPivot&&this.player.userData.rightArmPivot.rotation.set(-.25,.1,.35),this.fallingPhoneMesh&&(this.fallingPhoneMesh.visible=!0,this.fallingPhoneMesh.position.set(-5.9,.95,-3.4),this.fallingPhoneMesh.rotation.set(0,0,0)));const a=Math.min(1,(i-8.2)/.78),r=.95-a*a*(.95-.33);this.fallingPhoneMesh&&(this.fallingPhoneMesh.position.y=r,this.fallingPhoneMesh.position.x=-5.9+Math.sin(a*Math.PI*2)*.05,this.fallingPhoneMesh.rotation.x+=t*16,this.fallingPhoneMesh.rotation.y+=t*12,this.fallingPhoneMesh.rotation.z+=t*8),this.camera.position.set(-3,2.1,.8),this.camera.lookAt(-6,1.35,-3.6)}else if(i<11.2){if(this.cutscenePhase===4){this.cutscenePhase=5,this.fallingPhoneMesh&&(this.fallingPhoneMesh.visible=!1),ct.playPhoneDropSound(),this.phoneScreenItem&&(this.phoneScreenItem.position.set(-5.8,.32,-3.45),this.phoneScreenItem.rotation.set(0,.35,.02),this.phoneScreenItem.visible=!0),this.phoneBackItem&&(this.phoneBackItem.position.set(-6.15,.32,-3.3),this.phoneBackItem.rotation.set(Math.PI,.8,0),this.phoneBackItem.visible=!0);const r=document.getElementById("cutscene-speaker-title"),o=document.getElementById("cutscene-text");r&&(r.textContent="😱 Chacha (Comic Shock!)"),o&&(o.textContent='"Haye daiyya re! Naya-navela phone haath se chhut gaya! Screen alag ho gayi aur back cover alag! Bina phone ke mandap ka rasta kaise milega?!"')}i<9.35?(this.camera.position.lerp(new L(-3.4,1.9,.4),.12),this.camera.lookAt(-5.95,1,-3.4)):(this.camera.position.lerp(new L(-3,2.1,.8),.15),this.camera.lookAt(-6,1.35,-3.6));const a=Math.sin(e*30)*.025;this.player.userData.leftArmPivot&&this.player.userData.leftArmPivot.rotation.set(-2.2+a,.35,-.65),this.player.userData.rightArmPivot&&this.player.userData.rightArmPivot.rotation.set(-2.2-a,-.35,.65),this.player.userData.headGroup&&(this.player.userData.headGroup.rotation.x=.25+a*2,this.player.userData.headGroup.rotation.z=a*1.5)}else this.endCutscene();this.renderer.render(this.scene,this.camera);return}if(this.isGameOver){this.renderer.render(this.scene,this.camera);return}if(this.timerRunning&&this.gameTimer>0&&!this.isCutscene&&!this.isWeddingWalk&&!this.isGameOver){if(this.gameTimer-=t,this.gameTimer<=0){this.gameTimer=0,this.timerRunning=!1,this.updateTimerDisplay(),this.triggerGameOver("⏰ SHUBH MUHURAT NIKAL GAYA! Pandit ji mandap chhod kar chale gaye aur Dulha bina sehre ke reh gaya!"),this.renderer.render(this.scene,this.camera);return}this.updateTimerDisplay()}const n=this.isRiding?this.scooter.position:this.player.position;if(this.coins.forEach((i,a)=>{i.userData.isCollected||(i.rotation.y+=t*2.8,i.position.y=i.userData.initialY+Math.sin(e*5+a)*.08,n.distanceTo(i.position)<1.6&&(i.userData.isCollected=!0,i.visible=!1,ct.playCoinChime(),this.addScore(50,0),this.spawnFloatingScore("+50 SWAG 🪙",i.position)))}),!this.isRiding&&this.stage<=4&&!this.isFalling){let i=0,a=0;this.keys.left&&(i-=1),this.keys.right&&(i+=1),this.keys.up&&(a-=1),this.keys.down&&(a+=1);const r=Math.hypot(i,a);if(r>.01){i=i/r*4.5*t,a=a/r*4.5*t;let c=this.player.position.x+i,l=this.player.position.z+a;c=Math.max(-11.5,Math.min(82,c)),l=Math.max(-4.4,Math.min(3,l));const u=this.getColliders(),d=this.player.userData&&this.player.userData.radius||.35;for(const g of u)if(g.type==="circle"){const f=c-g.x,h=this.player.position.z-g.z,S=Math.hypot(f,h),T=g.radius+d;if(S<T&&S>1e-4){const x=T-S;c+=f/S*x}}else if(g.type==="box"){const f=this.player.position.z,h=this.player.position.x;f>g.minZ-d&&f<g.maxZ+d&&(i>0&&h<=g.minX-d&&c>g.minX-d?c=g.minX-d:i<0&&h>=g.maxX+d&&c<g.maxX+d&&(c=g.maxX+d))}for(const g of u)if(g.type==="circle"){const f=c-g.x,h=l-g.z,S=Math.hypot(f,h),T=g.radius+d;if(S<T&&S>1e-4){const x=T-S;l+=h/S*x}}else if(g.type==="box"){const f=this.player.position.z;c>g.minX-d&&c<g.maxX+d&&(a>0&&f<=g.minZ-d&&l>g.minZ-d?l=g.minZ-d:a<0&&f>=g.maxZ+d&&l<g.maxZ+d&&(l=g.maxZ+d))}c>=-11.5&&c<=-4.5&&l<=-2.2?l<=-2.8?this.player.position.y=.32:this.player.position.y=.16:this.player.position.y=0,this.player.position.x=c,this.player.position.z=l;let m=Math.atan2(i,a)-this.player.rotation.y;for(;m<-Math.PI;)m+=Math.PI*2;for(;m>Math.PI;)m-=Math.PI*2;this.player.rotation.y+=m*.22,this.player.userData.walkPhase+=7.5*t;const _=Math.sin(this.player.userData.walkPhase)*.42;if(this.player.userData.leftLegPivot.rotation.x=_,this.player.userData.rightLegPivot.rotation.x=-_,this.player.userData.torsoGroup.rotation.z=Math.sin(this.player.userData.walkPhase)*.025,this.inventory){const g=Math.sin(this.player.userData.walkPhase*2)*.02;this.player.userData.leftArmPivot.rotation.set(-1.25+g,-.15,-.22),this.player.userData.rightArmPivot.rotation.set(-1.25-g,.15,.22)}else this.player.userData.leftArmPivot.rotation.set(-_*.65,0,-.06),this.player.userData.rightArmPivot.rotation.set(_*.65,0,.06);this.player.userData.torsoGroup.position.y=1.25+Math.abs(Math.sin(this.player.userData.walkPhase*2))*.02}else this.player.userData.leftLegPivot.rotation.x*=.8,this.player.userData.rightLegPivot.rotation.x*=.8,this.player.userData.torsoGroup.rotation.z*=.8,this.inventory?(this.player.userData.leftArmPivot.rotation.set(-1.25,-.15,-.22),this.player.userData.rightArmPivot.rotation.set(-1.25,.15,.22)):(this.player.userData.leftArmPivot.rotation.x*=.8,this.player.userData.leftArmPivot.rotation.z*=.8,this.player.userData.rightArmPivot.rotation.x*=.8,this.player.userData.rightArmPivot.rotation.z*=.8),this.player.userData.torsoGroup.position.y=Qt.lerp(this.player.userData.torsoGroup.position.y,1.25,.1);if(this.player.position.x>=44&&this.player.position.x<=47.6&&this.player.position.z>-3.3&&this.player.position.z<3.3){let c=!1;this.longPlankPlaced&&Math.abs(this.player.position.z-this.longPlankZ)<=this.plankHalfWidth&&(c=!0),this.shortPlankPlaced&&Math.abs(this.player.position.z-this.shortPlankZ)<=this.plankHalfWidth&&this.player.position.x<=46.2&&(c=!0),this.plankPlaced&&!this.longPlankPlaced&&Math.abs(this.player.position.z-this.plankZ)<=this.plankHalfWidth&&(c=!0),c?this.isFalling||(this.player.position.y=.09):this.isFalling||this.triggerTrenchFall(!1)}else this.isFalling||(this.player.position.y=0);this.camera.position.x=Qt.lerp(this.camera.position.x,this.player.position.x+3.2,.06),this.camera.position.y=Qt.lerp(this.camera.position.y,2.4,.06),this.camera.position.z=Qt.lerp(this.camera.position.z,this.player.position.z+8.8,.06);const o=this.isFalling?Qt.lerp(1.3,-.4,Math.min(1,Math.max(0,-this.player.position.y/2.15))):1.3;this.camera.lookAt(this.player.position.x+1,o,this.player.position.z),this.updatePrompt(),this.radialWheelModal&&this.radialWheelModal.style.display==="flex"&&(this.player.position.distanceTo(new L(-9.2,.32,-2.8))>=2.5||this.stage!==0)&&this.closeRadialWheel()}if(this.radialWheelModal&&this.radialWheelModal.style.display==="flex"){const a=new L(-10.8,3.1,-3.9).clone().project(this.camera);if(a.z<1){const r=(a.x*.5+.5)*window.innerWidth,o=(-a.y*.5+.5)*window.innerHeight+Math.sin(e*3.5)*5;this.radialWheelModal.style.left=`${r}px`,this.radialWheelModal.style.top=`${o}px`}}if(this.cow.userData.isDistracted&&this.cow.userData.state==="moving"){const r=62-this.cow.position.x,o=-2.8-this.cow.position.z,c=Math.hypot(r,o),l=Math.atan2(-o,r);if(this.cow.rotation.y=Qt.lerp(this.cow.rotation.y,l,.08),c>.85){const u=1.35*t;this.cow.position.x+=Math.cos(this.cow.rotation.y)*u,this.cow.position.z-=Math.sin(this.cow.rotation.y)*u,this.cow.position.y=Math.abs(Math.sin(e*8))*.04}else this.cow.userData.state="eating",this.cow.position.y=0,this.colliders=this.colliders.filter(u=>u.name!=="Cow"),this.cow.userData.headGroup&&(this.cow.userData.headGroup.rotation.x=.35)}if(this.cow.userData.state==="eating"&&this.cow.userData.headGroup?(this.cow.userData.headGroup.rotation.x=.35+Math.sin(e*4)*.08,this.cow.userData.tailGroup.rotation.z=Math.sin(e*6)*.28):this.cow.userData.headGroup&&(this.cow.userData.headGroup.rotation.x=Math.sin(e*3)*.06,this.cow.userData.tailGroup.rotation.z=Math.sin(e*5)*.22),this.isRiding&&this.stage<=3&&!this.isFalling){if(this.stage===0)(this.keys.right||this.keys.up||this.keys.down)&&(this.scooterSpeed=0,this.promptTip.innerHTML="⚠️ GPS map nahi chal raha! Pehle toota mobile [E] theek karein!");else{this.keys.right?this.scooterSpeed=Math.min(this.maxSpeed,this.scooterSpeed+9*t):this.keys.left?this.scooterSpeed=Math.max(-2,this.scooterSpeed-8*t):this.scooterSpeed*=.96,this.keys.up&&(this.scooter.position.z=Math.max(-2.9,this.scooter.position.z-3.5*t)),this.keys.down&&(this.scooter.position.z=Math.min(2.5,this.scooter.position.z+3.5*t)),this.scooter.position.x+=this.scooterSpeed*t;const l=this.scooterSpeed*t/.34;this.scooter.userData.frontWheel.rotation.z-=l,this.scooter.userData.rearWheel.rotation.z-=l,this.scooter.position.y=Math.abs(Math.sin(e*16))*.04}if(this.stage===1&&!this.trenchEncountered&&this.scooter.position.x>=15&&(this.trenchEncountered=!0,this.triggerJugaadToast("🛑 SADAK TOOTI HAI! PULL BANANA PADEGA!")),this.stage===1&&!this.plankPlaced&&this.scooter.position.x>=39.5&&this.scooter.position.x<43.8&&(this.promptTip.innerHTML="🛑 Sadak tooti hai! Press <b>[E]</b> to Dismount & Lakdi ka Phatta dhundo!"),this.scooter.position.x>=44&&this.scooter.position.x<=47.6){let l=!1;this.longPlankPlaced&&Math.abs(this.scooter.position.z-this.longPlankZ)<=this.plankHalfWidth&&(l=!0),this.shortPlankPlaced&&Math.abs(this.scooter.position.z-this.shortPlankZ)<=this.plankHalfWidth&&this.scooter.position.x<=46.2&&(l=!0),this.plankPlaced&&!this.longPlankPlaced&&Math.abs(this.scooter.position.z-this.plankZ)<=this.plankHalfWidth&&(l=!0),l?this.isFalling||(this.scooter.position.y=.18):this.isFalling||this.triggerTrenchFall(!0)}this.stage===1&&this.plankPlaced&&this.scooter.position.x>48.3&&(this.addScore(200,1),this.spawnFloatingScore("+200 SWAG 🌉 BRIDGE CROSSED!",this.scooter.position),this.cow.userData.isDistracted?(this.setStage(3),this.triggerJugaadToast("✨ TRENCH CROSSED & ROAD IS CLEAR! ✨"),this.questText.textContent="Full throttle bhagao! Sheesh Mahal gate me entry maaro!"):(this.setStage(2),this.triggerJugaadToast("✨ TRENCH CROSSED! KEEP GOING! ✨"),this.questText.textContent="Aage sadak par dekhein! Gau Mata raste me aaram kar rahi hain!")),this.stage===2&&!this.cow.userData.isDistracted&&this.scooter.position.x>=53&&this.scooter.position.x<59.5&&(this.promptTip.innerHTML="🐮 Gau Mata sadak par baithi hain! Press <b>[E]</b> to Dismount & Taazi Ghaas khilayein!"),this.stage===2&&this.cow.userData.isDistracted&&this.scooter.position.x>63.5&&(this.setStage(3),this.triggerJugaadToast("✨ ROAD CLEAR! FULL THROTTLE! ✨"),this.questText.textContent="Full throttle bhagao! Sheesh Mahal gate me entry maaro!");const i=Math.abs(this.scooter.position.x-this.cow.position.x),a=Math.abs(this.scooter.position.z-this.cow.position.z);if((this.cow.userData.isDistracted?i<1.8&&a<1.3:i<2.2&&a<1.5)&&!this.isAccident){this.triggerCowAccident();return}const o=this.scooter.localToWorld(this.scooter.userData.exhaustPos.clone());Math.random()<.4&&Math.abs(this.scooterSpeed)>.5&&this.emitSmoke(o),ct.setEngineSpeed(Math.abs(this.scooterSpeed)/this.maxSpeed),this.camera.position.x=Qt.lerp(this.camera.position.x,this.scooter.position.x+4.5,.08),this.camera.position.y=Qt.lerp(this.camera.position.y,2.4,.08),this.camera.position.z=Qt.lerp(this.camera.position.z,this.scooter.position.z+8.8,.08);const c=this.isFalling?Qt.lerp(1.4,-.4,Math.min(1,Math.max(0,-this.scooter.position.y/2.15))):1.4;this.camera.lookAt(this.scooter.position.x+2,c,this.scooter.position.z),this.stage===3&&(this.scooter.position.x>74.2&&this.scooter.position.z>-1.2?(this.scooter.position.x=74.2,this.scooterSpeed=0,this.promptTip.innerHTML="⛔ <b>Sheesh Mahal Gate:</b> Scooter andar le jana mana hai! Baayein VIP Parking Bay me mod kar lagayein!"):this.scooter.position.x>75.8&&(this.scooter.position.x=75.8,this.scooterSpeed=0),this.scooter.position.x>=71.8&&this.scooter.position.x<=76.2&&this.scooter.position.z<=-1.1&&this.scooter.position.z>=-3.3?this.promptTip.innerHTML="🅿️ <b>VIP Parking Bay:</b> Chetak park karne ke liye <b>[E]</b> dabayein!":this.scooter.position.x>=71?this.promptTip.innerHTML="🅿️ Aage baayein VIP Parking Bay hai! Steering modkar slot me le jaayein!":this.scooter.position.x>=65&&(this.promptTip.innerHTML="Sheesh Mahal aa gaya! Sadak ke kinare bane VIP Parking Bay me Chetak park karein!"))}if(this.parkingArrow&&this.parkingArrow.visible&&(this.parkingArrow.position.y=2.2+Math.sin(e*6)*.22,this.parkingArrow.rotation.y+=t*2.2),this.isWeddingWalk){this.weddingWalkTimer=(this.weddingWalkTimer||0)+t;const i=2*t;this.player.position.x+=i,this.player.position.z=Qt.lerp(this.player.position.z,-.3,.08),this.chachi.position.x+=i,this.player.rotation.y=Qt.lerp(this.player.rotation.y,Math.PI/2,.15),this.chachi.rotation.y=Qt.lerp(this.chachi.rotation.y,Math.PI/2,.15);const a=Math.sin(this.weddingWalkTimer*9)*.42;if(this.player.userData.leftLegPivot&&(this.player.userData.leftLegPivot.rotation.x=a,this.player.userData.rightLegPivot.rotation.x=-a),this.chachi.userData.leftLegPivot&&(this.chachi.userData.leftLegPivot.rotation.x=-a,this.chachi.userData.rightLegPivot.rotation.x=a),this.camera.position.x=Qt.lerp(this.camera.position.x,this.player.position.x-2.8,.06),this.camera.position.z=Qt.lerp(this.camera.position.z,7.2,.06),this.camera.lookAt(this.player.position.x+2,1.4,0),this.weddingWalkTimer>2.8){this.isWeddingWalk=!1,this.timerRunning=!1;const r=Math.max(0,Math.floor(this.gameTimer)*5),o=this.currentRunScore+r,c=document.getElementById("victory-run-score"),l=document.getElementById("victory-time-bonus"),u=document.getElementById("victory-final-score"),d=document.getElementById("victory-high-score-msg");c&&(c.textContent=`+${this.currentRunScore}`),l&&(l.textContent=`+${r} (${Math.floor(this.gameTimer)}s left)`),u&&(u.textContent=`${o} Pts`);const p=parseInt(localStorage.getItem("bhopali_high_score")||"0",10),_=parseInt(localStorage.getItem("bhopali_total_swag")||localStorage.getItem("bhopali_swag")||"1000",10)+o;localStorage.setItem("bhopali_total_swag",_.toString()),o>p?(localStorage.setItem("bhopali_high_score",o.toString()),d&&(d.textContent="🌟 NAYA RECORD! NEW HIGH SCORE! 🏆")):d&&(d.textContent=`🏆 Best High Score: ${p} Pts`);const g=document.getElementById("top-score"),f=document.getElementById("top-high-score");g&&(g.textContent=_.toString()),f&&(f.textContent=Math.max(p,o).toString()),this.victoryModal&&(this.victoryModal.style.display="flex")}}if(this.confetti.forEach(i=>{i.active&&(i.mesh.position.addScaledVector(i.vel,t),i.vel.y-=3.5*t,i.mesh.rotation.x+=i.rotVel.x*t,i.mesh.rotation.y+=i.rotVel.y*t,i.mesh.position.y<.05&&(i.mesh.position.y=.05,i.vel.set(0,0,0)))}),this.particles.forEach(i=>{i.mesh.visible&&(i.life+=t,i.mesh.position.addScaledVector(i.vel,t),i.mesh.scale.setScalar(.4+i.life/i.maxLife*.8),i.mesh.material.opacity=(1-i.life/i.maxLife)*.5,i.life>=i.maxLife&&(i.mesh.visible=!1))}),this.isFalling){const i=this.isRiding?this.scooter:this.player;if(this.isRiding){this.camera.position.x=Qt.lerp(this.camera.position.x,this.scooter.position.x+4.5,.08),this.camera.position.y=Qt.lerp(this.camera.position.y,2.4,.08),this.camera.position.z=Qt.lerp(this.camera.position.z,this.scooter.position.z+8.8,.08);const a=Qt.lerp(1.4,-.4,Math.min(1,Math.max(0,-this.scooter.position.y/2.15)));this.camera.lookAt(this.scooter.position.x+2,a,this.scooter.position.z)}else{this.camera.position.x=Qt.lerp(this.camera.position.x,this.player.position.x+3.2,.06),this.camera.position.y=Qt.lerp(this.camera.position.y,2.4,.06),this.camera.position.z=Qt.lerp(this.camera.position.z,this.player.position.z+8.8,.06);const a=Qt.lerp(1.3,-.4,Math.min(1,Math.max(0,-this.player.position.y/2.15)));this.camera.lookAt(this.player.position.x+1,a,this.player.position.z)}this.trenchLanded||(this.trenchFallVel=(this.trenchFallVel||-1.5)-22*t,i.position.y+=this.trenchFallVel*t,i.position.x=Qt.lerp(i.position.x,this.trenchTargetX,.08),this.isRiding?this.scooter.rotation.z=Qt.lerp(this.scooter.rotation.z,-.75,.15):this.player.rotation.z=Qt.lerp(this.player.rotation.z,.65,.15),i.position.y<=-2.1&&(this.trenchLanded=!0,i.position.y=-2.15,this.trenchFallVel=0,this.isRiding&&(this.scooter.rotation.z=-1.15,this.scooter.rotation.x=.25),this.emitWaterSplash(i.position),ct.playSplash(),ct.playBrickThud(),this.isRiding&&ct.playHorn(),this.shakeDuration=.45,this.deductLife("Gaddhe ke paani aur pattharon me dharraam se gir gaye! (-1 Heart)"),this.addScore(-150,0),this.spawnFloatingScore("🌊 -150 SWAG! PIT FALL!",i.position),this.triggerJugaadToast("💥 CHHAPAAK! GADDHE MEIN GIRE! (-1 HEART)"),setTimeout(()=>{if(this.lives<=0)return;const a=this.longPlankPlaced?this.longPlankZ:this.shortPlankPlaced?this.shortPlankZ:0;this.isRiding?(this.scooter.position.set(41.5,0,a),this.scooter.rotation.set(0,0,0),this.scooter.position.y=0,this.isFalling=!1,this.trenchLanded=!1,ct.startScooterEngine()):(this.player.position.set(41.5,0,a),this.player.rotation.set(0,0,0),this.player.position.y=0,this.isFalling=!1,this.trenchLanded=!1)},1800)))}this.splashParticles&&this.splashParticles.forEach(i=>{i.mesh.visible&&(i.life+=t,i.mesh.position.addScaledVector(i.vel,t),i.vel.y-=14*t,i.mesh.scale.setScalar(Math.max(.05,(1-i.life/i.maxLife)*1.2)),(i.life>=i.maxLife||i.mesh.position.y<-2.25)&&(i.mesh.visible=!1))}),this.dazedGuy&&this.dazedGuy.visible&&this.dazedGuy.userData.starsOrbit&&(this.dazedGuy.userData.starsOrbit.rotation.y+=.08),this.shakeDuration>0&&(this.shakeDuration-=t,this.camera.position.x+=(Math.random()-.5)*.4,this.camera.position.y+=(Math.random()-.5)*.35),this.renderer.render(this.scene,this.camera)}updatePrompt(){if(this.isCutscene)return;const t=this.player.position;if(!this.inventory&&this.stage===0){const n=this.phoneCurrentPos||new L(-5.8,.32,-3.4);if(t.distanceTo(n)<2.5){this.promptTip.innerHTML="✨ Press <b>[E]</b> to Pick up Broken Phone Pieces!";return}}const e=t.distanceTo(new L(-9.2,.32,-2.8));if(this.stage===0&&e<1.8){this.promptTip.innerHTML="📦 Press <b>[E]</b> to Open Kabaad Dher Tool Selector!";return}if(!this.inventory&&this.stage===1){let n=null,i=2.5;if([this.longPlankMesh,this.shortPlankMesh,this.placedPlankMesh].forEach(a=>{if(a&&a.parent===this.scene){const r=Math.hypot(t.x-a.position.x,t.z-a.position.z);r<i&&(i=r,n=a)}}),n){this.promptTip.innerHTML=`✨ Press <b>[E]</b> to Pick up Placed ${n.userData.title||"Phatta"}`;return}}if(!this.inventory&&t.z<=-3.2&&Math.hypot(t.x-45.8,t.z- -5)<2.6){this.promptTip.innerHTML="🛑 <b>Rasta Band Hai!</b> Nagar Nigam ka malba & pipes pade hain!";return}if(this.stage===0&&t.distanceTo(this.scooter.position)<3.2){this.promptTip.innerHTML="🔒 <b>Chetak Locked:</b> Pehle toota phone repair karein!";return}if(this.inventory)if(this.stage===0){const n=this.phoneCurrentPos||new L(-5.8,.32,-3.4);if(this.inventory.userData.isPhone){this.promptTip.innerHTML="Toota Phone haath me hai! Deewal ke paas Kabaad Dher [E] se tool chunein!";return}else if(t.distanceTo(n)<2.8){this.promptTip.innerHTML=`✨ Press <b>[E]</b> to apply <b>${this.inventory.userData.title}</b> to Broken Phone!`;return}}else this.stage===1&&t.distanceTo(this.trench.position)<3.4?this.promptTip.innerHTML=`✨ Press <b>[E]</b> to place <b>${this.inventory.userData.title}</b> across Trench!`:(this.stage===1||this.stage===2)&&t.distanceTo(this.cow.position)<3.6?this.promptTip.innerHTML=`✨ Press <b>[E]</b> to offer <b>${this.inventory.userData.title}</b> to Gau Mata!`:this.stage===4&&t.distanceTo(this.scooter.position)<3.4?this.promptTip.innerHTML=`✨ Press <b>[E]</b> to prop up Chetak with <b>${this.inventory.userData.title}</b>!`:this.promptTip.innerHTML=`Carrying: <b>${this.inventory.userData.title}</b> | Press <b>[E]</b> anywhere to drop`;else{if(this.stage<4&&t.distanceTo(this.scooter.position)<3.2){this.promptTip.innerHTML="✨ Press <b>[E]</b> to Kickstart & Mount Chetak Scooter!";return}let n=null,i=2.8;if(this.items.forEach(a=>{const r=Math.hypot(t.x-a.position.x,t.z-a.position.z),o=Math.abs(t.y-a.position.y);r<i&&o<3.2&&(i=r,n=a)}),n){const a=n.userData.type==="plank"||n.userData.type==="short_plank";if(a&&this.stage===0){this.promptTip.innerHTML="🔒 <b>Phatta Locked:</b> Pehle toota phone theek karein!";return}if(a&&!this.trenchEncountered){this.promptTip.innerHTML="🔒 <b>Phatta Locked:</b> Pehle Chetak scooter chala kar sadak par aao!";return}this.promptTip.innerHTML=`✨ Press <b>[E]</b> to Inspect / Pick up <b>${n.userData.title}</b>`;return}if(this.stage===4&&t.distanceTo(this.scooter.position)<2){this.promptTip.innerHTML="⚠️ Chetak zameen par giri hai! Footpath ke malbe se <b>Laal Eent</b> [E] uthayein!";return}this.promptTip.innerHTML="Explore the mohalla with <b>W, A, S, D</b> | Find the right Jugaad objects!"}}}window.addEventListener("DOMContentLoaded",()=>{new fp});
