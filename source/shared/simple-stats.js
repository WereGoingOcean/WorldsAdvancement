!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(t.ss={})}(this,function(t){"use strict";function r(t){if(0===t.length)return 0;for(var r,n=t[0],e=0,a=1;a<t.length;a++)r=n+t[a],Math.abs(n)>=Math.abs(t[a])?e+=n-r+t[a]:e+=t[a]-r+n,n=r;return n+e}function g(t){if(0===t.length)throw new Error("mean requires at least one data point");return r(t)/t.length}function n(t,r){var n,e,a=g(t),o=0;if(2===r)for(e=0;e<t.length;e++)o+=(n=t[e]-a)*n;else for(e=0;e<t.length;e++)o+=Math.pow(t[e]-a,r);return o}function e(t){if(0===t.length)throw new Error("variance requires at least one data point");return n(t,2)/t.length}function a(t){if(1===t.length)return 0;var r=e(t);return Math.sqrt(r)}function o(t){if(0===t.length)throw new Error("mode requires at least one data point");if(1===t.length)return t[0];for(var r=t[0],n=NaN,e=0,a=1,o=1;o<t.length+1;o++)t[o]!==r?(e<a&&(e=a,n=r),a=1,r=t[o]):a++;return n}function f(t){return t.slice().sort(function(t,r){return t-r})}function u(t){if(0===t.length)throw new Error("min requires at least one data point");for(var r=t[0],n=1;n<t.length;n++)t[n]<r&&(r=t[n]);return r}function h(t){if(0===t.length)throw new Error("max requires at least one data point");for(var r=t[0],n=1;n<t.length;n++)t[n]>r&&(r=t[n]);return r}function i(t,r){var n=t.length*r;if(0===t.length)throw new Error("quantile requires at least one data point.");if(r<0||1<r)throw new Error("quantiles must be between 0 and 1");return 1===r?t[t.length-1]:0===r?t[0]:n%1!=0?t[Math.ceil(n)-1]:t.length%2==0?(t[n-1]+t[n])/2:t[n]}function c(t,r,n,e){for(n=n||0,e=e||t.length-1;n<e;){if(600<e-n){var a=e-n+1,o=r-n+1,i=Math.log(a),u=.5*Math.exp(2*i/3),h=.5*Math.sqrt(i*u*(a-u)/a);o-a/2<0&&(h*=-1),c(t,r,Math.max(n,Math.floor(r-o*u/a+h)),Math.min(e,Math.floor(r+(a-o)*u/a+h)))}var f=t[r],s=n,l=e;for(p(t,n,r),t[e]>f&&p(t,n,e);s<l;){for(p(t,s,l),s++,l--;t[s]<f;)s++;for(;t[l]>f;)l--}t[n]===f?p(t,n,l):p(t,++l,e),l<=r&&(n=l+1),r<=l&&(e=l-1)}}function p(t,r,n){var e=t[r];t[r]=t[n],t[n]=e}function s(t,r){var n=t.slice();if(Array.isArray(r)){!function(t,r){for(var n=[0],e=0;e<r.length;e++)n.push(w(t.length,r[e]));n.push(t.length-1),n.sort(v);var a=[0,n.length-1];for(;a.length;){var o=Math.ceil(a.pop()),i=Math.floor(a.pop());if(!(o-i<=1)){var u=Math.floor((i+o)/2);l(t,n[u],n[i],n[o]),a.push(i,u,u,o)}}}(n,r);for(var e=[],a=0;a<r.length;a++)e[a]=i(n,r[a]);return e}return l(n,w(n.length,r),0,n.length-1),i(n,r)}function l(t,r,n,e){r%1==0?c(t,r,n,e):(c(t,r=Math.floor(r),n,e),c(t,r+1,r+1,e))}function v(t,r){return t-r}function w(t,r){var n=t*r;return 1===r?t-1:0===r?0:n%1!=0?Math.ceil(n)-1:t%2==0?n-.5:n}function M(t,r){if(r<t[0])return 0;if(r>t[t.length-1])return 1;var n=function(t,r){var n=0,e=0,a=t.length;for(;e<a;)r<=t[n=e+a>>>1]?a=n:e=-~n;return e}(t,r);if(t[n]!==r)return n/t.length;n++;var e=function(t,r){var n=0,e=0,a=t.length;for(;e<a;)r>=t[n=e+a>>>1]?e=-~n:a=n;return e}(t,r);if(e===n)return n/t.length;var a=e-n+1;return a*(e+n)/2/a/t.length}function m(t){var r=s(t,.75),n=s(t,.25);if("number"==typeof r&&"number"==typeof n)return r-n}function d(t){return+s(t,.5)}function b(t){for(var r=d(t),n=[],e=0;e<t.length;e++)n.push(Math.abs(t[e]-r));return d(n)}function q(t,r){r=r||Math.random;for(var n,e,a=t.length;0<a;)e=Math.floor(r()*a--),n=t[a],t[a]=t[e],t[e]=n;return t}function E(t,r){return q(t.slice().slice(),r)}function y(t){for(var r,n=0,e=0;e<t.length;e++)0!==e&&t[e]===r||(r=t[e],n++);return n}function S(t,r){for(var n=[],e=0;e<t;e++){for(var a=[],o=0;o<r;o++)a.push(0);n.push(a)}return n}function x(t,r,n,e){var a;if(0<t){var o=(n[r]-n[t-1])/(r-t+1);a=e[r]-e[t-1]-(r-t+1)*o*o}else a=e[r]-n[r]*n[r]/(r+1);return a<0?0:a}function P(t,r,n,e,a,o,i){if(!(r<t)){var u=Math.floor((t+r)/2);e[n][u]=e[n-1][u-1],a[n][u]=u;var h=n;n<t&&(h=Math.max(h,a[n][t-1]||0)),h=Math.max(h,a[n-1][u]||0);var f,s,l,c=u-1;r<e.length-1&&(c=Math.min(c,a[n][r+1]||0));for(var g=c;h<=g&&!((f=x(g,u,o,i))+e[n-1][h-1]>=e[n][u]);--g)(s=x(h,u,o,i)+e[n-1][h-1])<e[n][u]&&(e[n][u]=s,a[n][u]=h),h++,(l=f+e[n-1][g-1])<e[n][u]&&(e[n][u]=l,a[n][u]=g);P(t,u-1,n,e,a,o,i),P(u+1,r,n,e,a,o,i)}}function k(t,r){if(t.length!==r.length)throw new Error("sampleCovariance requires samples with equal lengths");if(t.length<2)throw new Error("sampleCovariance requires at least two data points in each sample");for(var n=g(t),e=g(r),a=0,o=0;o<t.length;o++)a+=(t[o]-n)*(r[o]-e);return a/(t.length-1)}function I(t){if(t.length<2)throw new Error("sampleVariance requires at least two data points");return n(t,2)/(t.length-1)}function D(t){var r=I(t);return Math.sqrt(r)}function C(t,r,n,e){return(t*r+n*e)/(r+e)}function T(t){if(0===t.length)throw new Error("rootMeanSquare requires at least one data point");for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n],2);return Math.sqrt(r/t.length)}function _(){this.totalCount=0,this.data={}}function F(){this.weights=[],this.bias=0}_.prototype.train=function(t,r){for(var n in this.data[r]||(this.data[r]={}),t){var e=t[n];void 0===this.data[r][n]&&(this.data[r][n]={}),void 0===this.data[r][n][e]&&(this.data[r][n][e]=0),this.data[r][n][e]++}this.totalCount++},_.prototype.score=function(t){var r,n={};for(var e in t){var a=t[e];for(r in this.data)n[r]={},this.data[r][e]?n[r][e+"_"+a]=(this.data[r][e][a]||0)/this.totalCount:n[r][e+"_"+a]=0}var o={};for(r in n)for(var i in o[r]=0,n[r])o[r]+=n[r][i];return o},F.prototype.predict=function(t){if(t.length!==this.weights.length)return null;for(var r=0,n=0;n<this.weights.length;n++)r+=this.weights[n]*t[n];return 0<(r+=this.bias)?1:0},F.prototype.train=function(t,r){if(0!==r&&1!==r)return null;t.length!==this.weights.length&&(this.weights=t,this.bias=1);var n=this.predict(t);if(n!==r){for(var e=r-n,a=0;a<this.weights.length;a++)this.weights[a]+=e*t[a];this.bias+=e}return this};var N=1e-4;function R(t){if(t<0)throw new Error("factorial requires a non-negative value");if(Math.floor(t)!==t)throw new Error("factorial requires an integer input");for(var r=1,n=2;n<=t;n++)r*=n;return r}var A=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22],z=Math.log(Math.sqrt(2*Math.PI));var V={1:{.995:0,.99:0,.975:0,.95:0,.9:.02,.5:.45,.1:2.71,.05:3.84,.025:5.02,.01:6.63,.005:7.88},2:{.995:.01,.99:.02,.975:.05,.95:.1,.9:.21,.5:1.39,.1:4.61,.05:5.99,.025:7.38,.01:9.21,.005:10.6},3:{.995:.07,.99:.11,.975:.22,.95:.35,.9:.58,.5:2.37,.1:6.25,.05:7.81,.025:9.35,.01:11.34,.005:12.84},4:{.995:.21,.99:.3,.975:.48,.95:.71,.9:1.06,.5:3.36,.1:7.78,.05:9.49,.025:11.14,.01:13.28,.005:14.86},5:{.995:.41,.99:.55,.975:.83,.95:1.15,.9:1.61,.5:4.35,.1:9.24,.05:11.07,.025:12.83,.01:15.09,.005:16.75},6:{.995:.68,.99:.87,.975:1.24,.95:1.64,.9:2.2,.5:5.35,.1:10.65,.05:12.59,.025:14.45,.01:16.81,.005:18.55},7:{.995:.99,.99:1.25,.975:1.69,.95:2.17,.9:2.83,.5:6.35,.1:12.02,.05:14.07,.025:16.01,.01:18.48,.005:20.28},8:{.995:1.34,.99:1.65,.975:2.18,.95:2.73,.9:3.49,.5:7.34,.1:13.36,.05:15.51,.025:17.53,.01:20.09,.005:21.96},9:{.995:1.73,.99:2.09,.975:2.7,.95:3.33,.9:4.17,.5:8.34,.1:14.68,.05:16.92,.025:19.02,.01:21.67,.005:23.59},10:{.995:2.16,.99:2.56,.975:3.25,.95:3.94,.9:4.87,.5:9.34,.1:15.99,.05:18.31,.025:20.48,.01:23.21,.005:25.19},11:{.995:2.6,.99:3.05,.975:3.82,.95:4.57,.9:5.58,.5:10.34,.1:17.28,.05:19.68,.025:21.92,.01:24.72,.005:26.76},12:{.995:3.07,.99:3.57,.975:4.4,.95:5.23,.9:6.3,.5:11.34,.1:18.55,.05:21.03,.025:23.34,.01:26.22,.005:28.3},13:{.995:3.57,.99:4.11,.975:5.01,.95:5.89,.9:7.04,.5:12.34,.1:19.81,.05:22.36,.025:24.74,.01:27.69,.005:29.82},14:{.995:4.07,.99:4.66,.975:5.63,.95:6.57,.9:7.79,.5:13.34,.1:21.06,.05:23.68,.025:26.12,.01:29.14,.005:31.32},15:{.995:4.6,.99:5.23,.975:6.27,.95:7.26,.9:8.55,.5:14.34,.1:22.31,.05:25,.025:27.49,.01:30.58,.005:32.8},16:{.995:5.14,.99:5.81,.975:6.91,.95:7.96,.9:9.31,.5:15.34,.1:23.54,.05:26.3,.025:28.85,.01:32,.005:34.27},17:{.995:5.7,.99:6.41,.975:7.56,.95:8.67,.9:10.09,.5:16.34,.1:24.77,.05:27.59,.025:30.19,.01:33.41,.005:35.72},18:{.995:6.26,.99:7.01,.975:8.23,.95:9.39,.9:10.87,.5:17.34,.1:25.99,.05:28.87,.025:31.53,.01:34.81,.005:37.16},19:{.995:6.84,.99:7.63,.975:8.91,.95:10.12,.9:11.65,.5:18.34,.1:27.2,.05:30.14,.025:32.85,.01:36.19,.005:38.58},20:{.995:7.43,.99:8.26,.975:9.59,.95:10.85,.9:12.44,.5:19.34,.1:28.41,.05:31.41,.025:34.17,.01:37.57,.005:40},21:{.995:8.03,.99:8.9,.975:10.28,.95:11.59,.9:13.24,.5:20.34,.1:29.62,.05:32.67,.025:35.48,.01:38.93,.005:41.4},22:{.995:8.64,.99:9.54,.975:10.98,.95:12.34,.9:14.04,.5:21.34,.1:30.81,.05:33.92,.025:36.78,.01:40.29,.005:42.8},23:{.995:9.26,.99:10.2,.975:11.69,.95:13.09,.9:14.85,.5:22.34,.1:32.01,.05:35.17,.025:38.08,.01:41.64,.005:44.18},24:{.995:9.89,.99:10.86,.975:12.4,.95:13.85,.9:15.66,.5:23.34,.1:33.2,.05:36.42,.025:39.36,.01:42.98,.005:45.56},25:{.995:10.52,.99:11.52,.975:13.12,.95:14.61,.9:16.47,.5:24.34,.1:34.28,.05:37.65,.025:40.65,.01:44.31,.005:46.93},26:{.995:11.16,.99:12.2,.975:13.84,.95:15.38,.9:17.29,.5:25.34,.1:35.56,.05:38.89,.025:41.92,.01:45.64,.005:48.29},27:{.995:11.81,.99:12.88,.975:14.57,.95:16.15,.9:18.11,.5:26.34,.1:36.74,.05:40.11,.025:43.19,.01:46.96,.005:49.65},28:{.995:12.46,.99:13.57,.975:15.31,.95:16.93,.9:18.94,.5:27.34,.1:37.92,.05:41.34,.025:44.46,.01:48.28,.005:50.99},29:{.995:13.12,.99:14.26,.975:16.05,.95:17.71,.9:19.77,.5:28.34,.1:39.09,.05:42.56,.025:45.72,.01:49.59,.005:52.34},30:{.995:13.79,.99:14.95,.975:16.79,.95:18.49,.9:20.6,.5:29.34,.1:40.26,.05:43.77,.025:46.98,.01:50.89,.005:53.67},40:{.995:20.71,.99:22.16,.975:24.43,.95:26.51,.9:29.05,.5:39.34,.1:51.81,.05:55.76,.025:59.34,.01:63.69,.005:66.77},50:{.995:27.99,.99:29.71,.975:32.36,.95:34.76,.9:37.69,.5:49.33,.1:63.17,.05:67.5,.025:71.42,.01:76.15,.005:79.49},60:{.995:35.53,.99:37.48,.975:40.48,.95:43.19,.9:46.46,.5:59.33,.1:74.4,.05:79.08,.025:83.3,.01:88.38,.005:91.95},70:{.995:43.28,.99:45.44,.975:48.76,.95:51.74,.9:55.33,.5:69.33,.1:85.53,.05:90.53,.025:95.02,.01:100.42,.005:104.22},80:{.995:51.17,.99:53.54,.975:57.15,.95:60.39,.9:64.28,.5:79.33,.1:96.58,.05:101.88,.025:106.63,.01:112.33,.005:116.32},90:{.995:59.2,.99:61.75,.975:65.65,.95:69.13,.9:73.29,.5:89.33,.1:107.57,.05:113.14,.025:118.14,.01:124.12,.005:128.3},100:{.995:67.33,.99:70.06,.975:74.22,.95:77.93,.9:82.36,.5:99.33,.1:118.5,.05:124.34,.025:129.56,.01:135.81,.005:140.17}};var j=Math.sqrt(2*Math.PI),B={gaussian:function(t){return Math.exp(-.5*t*t)/j}},K={nrd:function(t){var r=D(t),n=m(t);return"number"==typeof n&&(r=Math.min(r,n/1.34)),1.06*r*Math.pow(t.length,-.2)}};function O(e,t,r){var a,o;if(void 0===t)a=B.gaussian;else if("string"==typeof t){if(!B[t])throw new Error('Unknown kernel "'+t+'"');a=B[t]}else a=t;if(void 0===r)o=K.nrd(e);else if("string"==typeof r){if(!K[r])throw new Error('Unknown bandwidth method "'+r+'"');o=K[r](e)}else o=r;return function(t){var r=0,n=0;for(r=0;r<e.length;r++)n+=a((t-e[r])/o);return n/o/e.length}}var U=Math.sqrt(2*Math.PI);function G(t){for(var r=t,n=t,e=1;e<15;e++)r+=n*=t*t/(2*e+1);return Math.round(1e4*(.5+r/U*Math.exp(-t*t/2)))/1e4}for(var H=[],L=0;L<=3.09;L+=.01)H.push(G(L));function W(t){var r=1/(1+.5*Math.abs(t)),n=r*Math.exp(-Math.pow(t,2)-1.26551223+1.00002368*r+.37409196*Math.pow(r,2)+.09678418*Math.pow(r,3)-.18628806*Math.pow(r,4)+.27886807*Math.pow(r,5)-1.13520398*Math.pow(r,6)+1.48851587*Math.pow(r,7)-.82215223*Math.pow(r,8)+.17087277*Math.pow(r,9));return 0<=t?1-n:n-1}function J(t){var r=8*(Math.PI-3)/(3*Math.PI*(4-Math.PI)),n=Math.sqrt(Math.sqrt(Math.pow(2/(Math.PI*r)+Math.log(1-t*t)/2,2)-Math.log(1-t*t)/r)-(2/(Math.PI*r)+Math.log(1-t*t)/2));return 0<=t?n:-n}function Q(t){if("number"==typeof t)return t<0?-1:0===t?0:1;throw new TypeError("not a number")}t.linearRegression=function(t){var r,n,e=t.length;if(1===e)n=t[r=0][1];else{for(var a,o,i,u=0,h=0,f=0,s=0,l=0;l<e;l++)u+=o=(a=t[l])[0],h+=i=a[1],f+=o*o,s+=o*i;n=h/e-(r=(e*s-u*h)/(e*f-u*u))*u/e}return{m:r,b:n}},t.linearRegressionLine=function(r){return function(t){return r.b+r.m*t}},t.standardDeviation=a,t.rSquared=function(t,r){if(t.length<2)return 1;for(var n,e=0,a=0;a<t.length;a++)e+=t[a][1];n=e/t.length;for(var o=0,i=0;i<t.length;i++)o+=Math.pow(n-t[i][1],2);for(var u=0,h=0;h<t.length;h++)u+=Math.pow(t[h][1]-r(t[h][0]),2);return 1-u/o},t.mode=function(t){return o(f(t))},t.modeFast=function(t){for(var r,n=new Map,e=0,a=0;a<t.length;a++){var o=n.get(t[a]);void 0===o?o=1:o++,e<o&&(r=t[a],e=o),n.set(t[a],o)}if(0===e)throw new Error("mode requires at last one data point");return r},t.modeSorted=o,t.min=u,t.max=h,t.extent=function(t){if(0===t.length)throw new Error("extent requires at least one data point");for(var r=t[0],n=t[0],e=1;e<t.length;e++)t[e]>n&&(n=t[e]),t[e]<r&&(r=t[e]);return[r,n]},t.minSorted=function(t){return t[0]},t.maxSorted=function(t){return t[t.length-1]},t.extentSorted=function(t){return[t[0],t[t.length-1]]},t.sum=r,t.sumSimple=function(t){for(var r=0,n=0;n<t.length;n++)r+=t[n];return r},t.product=function(t){for(var r=1,n=0;n<t.length;n++)r*=t[n];return r},t.quantile=s,t.quantileSorted=i,t.quantileRank=function(t,r){return M(f(t),r)},t.quantileRankSorted=M,t.interquartileRange=m,t.iqr=m,t.medianAbsoluteDeviation=b,t.mad=b,t.chunk=function(t,r){var n=[];if(r<1)throw new Error("chunk size must be a positive number");if(Math.floor(r)!==r)throw new Error("chunk size must be an integer");for(var e=0;e<t.length;e+=r)n.push(t.slice(e,e+r));return n},t.sampleWithReplacement=function(t,r,n){if(0===t.length)return[];n=n||Math.random;for(var e=t.length,a=[],o=0;o<r;o++){var i=Math.floor(n()*e);a.push(t[i])}return a},t.shuffle=E,t.shuffleInPlace=q,t.sample=function(t,r,n){return E(t,n).slice(0,r)},t.ckmeans=function(t,r){if(r>t.length)throw new Error("cannot generate more classes than there are data values");var n=f(t);if(1===y(n))return[n];var e=S(r,n.length),a=S(r,n.length);!function(t,r,n){for(var e,a=r[0].length,o=t[Math.floor(a/2)],i=[],u=[],h=0;h<a;++h)e=t[h]-o,0===h?(i.push(e),u.push(e*e)):(i.push(i[h-1]+e),u.push(u[h-1]+e*e)),r[0][h]=x(0,h,i,u),n[0][h]=0;for(var f=1;f<r.length;++f)P(f<r.length-1?f:a-1,a-1,f,r,n,i,u)}(n,e,a);for(var o=[],i=a[0].length-1,u=a.length-1;0<=u;u--){var h=a[u][i];o[u]=n.slice(h,i+1),0<u&&(i=h-1)}return o},t.uniqueCountSorted=y,t.sumNthPowerDeviations=n,t.equalIntervalBreaks=function(t,r){if(t.length<2)return t;for(var n=u(t),e=h(t),a=[n],o=(e-n)/r,i=1;i<r;i++)a.push(a[0]+o*i);return a.push(e),a},t.sampleCovariance=k,t.sampleCorrelation=function(t,r){return k(t,r)/D(t)/D(r)},t.sampleVariance=I,t.sampleStandardDeviation=D,t.sampleSkewness=function(t){if(t.length<3)throw new Error("sampleSkewness requires at least three data points");for(var r,n=g(t),e=0,a=0,o=0;o<t.length;o++)e+=(r=t[o]-n)*r,a+=r*r*r;var i=t.length-1,u=Math.sqrt(e/i),h=t.length;return h*a/((h-1)*(h-2)*Math.pow(u,3))},t.sampleKurtosis=function(t){var r=t.length;if(r<4)throw new Error("sampleKurtosis requires at least four data points");for(var n,e=g(t),a=0,o=0,i=0;i<r;i++)a+=(n=t[i]-e)*n,o+=n*n*n*n;return(r-1)/((r-2)*(r-3))*(r*(r+1)*o/(a*a)-3*(r-1))},t.permutationsHeap=function(t){for(var r=new Array(t.length),n=[t.slice()],e=0;e<t.length;e++)r[e]=0;for(e=0;e<t.length;)if(r[e]<e){var a=0;e%2!=0&&(a=r[e]);var o=t[a];t[a]=t[e],t[e]=o,n.push(t.slice()),r[e]++,e=0}else r[e]=0,e++;return n},t.combinations=function t(r,n){var e,a,o,i,u=[];for(e=0;e<r.length;e++)if(1===n)u.push([r[e]]);else for(o=t(r.slice(e+1,r.length),n-1),a=0;a<o.length;a++)(i=o[a]).unshift(r[e]),u.push(i);return u},t.combinationsReplacement=function t(r,n){for(var e=[],a=0;a<r.length;a++)if(1===n)e.push([r[a]]);else for(var o=t(r.slice(a,r.length),n-1),i=0;i<o.length;i++)e.push([r[a]].concat(o[i]));return e},t.addToMean=function(t,r,n){return t+(n-t)/(r+1)},t.combineMeans=C,t.combineVariances=function(t,r,n,e,a,o){var i=C(r,n,a,o);return(n*(t+Math.pow(r-i,2))+o*(e+Math.pow(a-i,2)))/(n+o)},t.geometricMean=function(t){if(0===t.length)throw new Error("geometricMean requires at least one data point");for(var r=1,n=0;n<t.length;n++){if(t[n]<=0)throw new Error("geometricMean requires only positive numbers as input");r*=t[n]}return Math.pow(r,1/t.length)},t.harmonicMean=function(t){if(0===t.length)throw new Error("harmonicMean requires at least one data point");for(var r=0,n=0;n<t.length;n++){if(t[n]<=0)throw new Error("harmonicMean requires only positive numbers as input");r+=1/t[n]}return t.length/r},t.average=g,t.mean=g,t.median=d,t.medianSorted=function(t){return i(t,.5)},t.subtractFromMean=function(t,r,n){return(t*r-n)/(r-1)},t.rootMeanSquare=T,t.rms=T,t.variance=e,t.tTest=function(t,r){return(g(t)-r)/(a(t)/Math.sqrt(t.length))},t.tTestTwoSample=function(t,r,n){var e=t.length,a=r.length;if(!e||!a)return null;n||(n=0);var o=g(t),i=g(r),u=I(t),h=I(r);if("number"==typeof o&&"number"==typeof i&&"number"==typeof u&&"number"==typeof h){var f=((e-1)*u+(a-1)*h)/(e+a-2);return(o-i-n)/Math.sqrt(f*(1/e+1/a))}},t.BayesianClassifier=_,t.bayesian=_,t.PerceptronModel=F,t.perceptron=F,t.epsilon=N,t.factorial=R,t.gamma=function t(r){if("number"==typeof(n=r)&&isFinite(n)&&Math.floor(n)===n)return r<=0?NaN:R(r-1);var n;if(--r<0)return Math.PI/(Math.sin(Math.PI*-r)*t(-r));var e=r+.25;return Math.pow(r/Math.E,r)*Math.sqrt(2*Math.PI*(r+1/6))*(1+1/144/Math.pow(e,2)-1/12960/Math.pow(e,3)-257/207360/Math.pow(e,4)-52/2612736/Math.pow(e,5)+5741173/9405849600/Math.pow(e,6)+37529/18811699200/Math.pow(e,7))},t.gammaln=function(t){if(t<=0)return 1/0;t--;for(var r=A[0],n=1;n<15;n++)r+=A[n]/(t+n);var e=5.2421875+t;return z+Math.log(r)-e+(t+.5)*Math.log(e)},t.bernoulliDistribution=function(t){if(t<0||1<t)throw new Error("bernoulliDistribution requires probability to be between 0 and 1 inclusive");return[1-t,t]},t.binomialDistribution=function(t,r){if(!(r<0||1<r||t<=0||t%1!=0)){for(var n=0,e=0,a=[],o=1;a[n]=o*Math.pow(r,n)*Math.pow(1-r,t-n),e+=a[n],o=o*(t-++n+1)/n,e<1-N;);return a}},t.poissonDistribution=function(t){if(!(t<=0)){for(var r=0,n=0,e=[],a=1;e[r]=Math.exp(-t)*Math.pow(t,r)/a,n+=e[r],a*=++r,n<1-N;);return e}},t.chiSquaredDistributionTable=V,t.chiSquaredGoodnessOfFit=function(t,r,n){for(var e,a,o=0,i=r(g(t)),u=[],h=[],f=0;f<t.length;f++)void 0===u[t[f]]&&(u[t[f]]=0),u[t[f]]++;for(f=0;f<u.length;f++)void 0===u[f]&&(u[f]=0);for(a in i)a in u&&(h[+a]=i[a]*t.length);for(a=h.length-1;0<=a;a--)h[a]<3&&(h[a-1]+=h[a],h.pop(),u[a-1]+=u[a],u.pop());for(a=0;a<u.length;a++)o+=Math.pow(u[a]-h[a],2)/h[a];return e=u.length-1-1,V[e][n]<o},t.kernelDensityEstimation=O,t.kde=O,t.zScore=function(t,r,n){return(t-r)/n},t.cumulativeStdNormalProbability=function(t){var r=Math.abs(t),n=Math.min(Math.round(100*r),H.length-1);return 0<=t?H[n]:+(1-H[n]).toFixed(4)},t.standardNormalTable=H,t.errorFunction=W,t.erf=W,t.inverseErrorFunction=J,t.probit=function(t){return 0===t?t=N:1<=t&&(t=1-N),Math.sqrt(2)*J(2*t-1)},t.permutationTest=function(t,r,n,e){if(void 0===e&&(e=1e4),void 0===n&&(n="two_side"),"two_side"!==n&&"greater"!==n&&"less"!==n)throw new Error("`alternative` must be either 'two_side', 'greater', or 'less'");for(var a=g(t)-g(r),o=new Array(e),i=t.concat(r),u=Math.floor(i.length/2),h=0;h<e;h++){q(i);var f=i.slice(0,u),s=i.slice(u,i.length),l=g(f)-g(s);o[h]=l}var c=0;if("two_side"===n)for(h=0;h<=e;h++)Math.abs(o[h])>=Math.abs(a)&&(c+=1);else if("greater"===n)for(h=0;h<=e;h++)o[h]>=a&&(c+=1);else for(h=0;h<=e;h++)o[h]<=a&&(c+=1);return c/e},t.bisect=function(t,r,n,e,a){if("function"!=typeof t)throw new TypeError("func must be a function");for(var o=0;o<e;o++){var i=(r+n)/2;if(0===t(i)||Math.abs((n-r)/2)<a)return i;Q(t(i))===Q(t(r))?r=i:n=i}throw new Error("maximum number of iterations exceeded")},t.quickselect=c,t.sign=Q,t.numericSort=f,Object.defineProperty(t,"__esModule",{value:!0})});
