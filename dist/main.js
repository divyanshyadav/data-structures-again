!(function(t){var r={};function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(n,i,function(r){return t[r]}.bind(null,i));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}([function(t,r,e){const{BST:n}=e(1),i=e(5),h=e(7),s=e(9);t.exports={BST:n,Stack:i,Queue:h,Heap:s}},function(t,r,e){const n=e(2);t.exports={BST:n}},function(t,r,e){const n=e(3);t.exports=n},function(t,r,e){const n=e(4),i=(t,r)=>t-r;t.exports=class{constructor(t=i){this.root=null,this.comparator=t}insert(t){const r=(t,e)=>null===t?new n(e):(this.comparator(e,t.data)<0?t.left=r(t.left,e):t.right=r(t.right,e),t);return this.root=r(this.root,t),this}search(t,r=this.root){return null===r?null:r.data===t?r:this.comparator(t,r.data)<0?this.search(t,r.left):this.search(t,r.right)}delete(t){const r=(t,e)=>{if(null===t)return null;if(e===t.data)if(null===t.left&&null===t.right)t=null;else if(null===t.left)t=t.right;else if(null===t.right)t=t.left;else{const e=this.min(t.right);t.data=e.data,t.right=r(t.right,t.data)}else this.comparator(e,t.data)<0?t.left=r(t.left,e):t.right=r(t.right,e);return t};this.root=r(this.root,t)}min(t=this.root){if(null===t)return null;let r=t;for(;null!==r.left;)r=r.left;return r}max(t=this.root){const r=t=>null===t?null:null===t.right?t:r(t.right);return r(t)}isBST(t=this.root){const r=(t,e,n)=>null===t||!(t.data<e||t.data>n)&&(r(t.left,e,t.data-1)&&r(t.right,t.data+1,n));return r(t,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY)}lca(t,r){t>r&&([t,r]=[r,t]);const e=(t,r,n)=>null===t?null:r<=t.data&&n>=t.data?t:r>t.data&&n>t.data?e(t.right,r,n):r<t.data&&n<t.data?e(t.left,r,n):null;return e(this.root,t,r)}_getPath(t,r,e=!1,n){null!==t&&(e?n.unshift(t.data):n.push(t.data),t.data!==r&&(r>t.data?this._getPath(t.right,r,e,n):this._getPath(t.left,r,e,n)))}shortestPath(t,r){const e=this.lca(t,r),n=[];return t<r?(this._getPath(e,t,!0,n),n.pop(),this._getPath(e,r,!1,n)):(this._getPath(e,r,!0,n),n.pop(),this._getPath(e,t,!1,n)),n}traverse(t="inorder"){return{preorder:this.preOrder.bind(this),inorder:this.inOrder.bind(this),postorder:this.postOrder.bind(this)}[t](this.root).join(" ")}preOrder(t=this.root,r=[]){return null===t?r:(r.push(t.data),this.preOrder(t.left,r),this.preOrder(t.right,r),r)}inOrder(t=this.root,r=[]){return null===t?r:(this.inOrder(t.left,r),r.push(t.data),this.inOrder(t.right,r),r)}postOrder(t=this.root,r=[]){return null===t?r:(this.postOrder(t.left,r),this.postOrder(t.right,r),r.push(t.data),r)}toString(){return this.inOrder().join(",")}}},function(t,r){t.exports=class{constructor(t=null,r=null,e=null){this.data=t,this.left=r,this.right=e}}},function(t,r,e){const n=e(6);t.exports=n},function(t,r){t.exports=class{constructor(){this.container=[]}push(t){this.container.unshift(t)}pop(){return this.container.shift()}peek(){return this.container[0]}get length(){return this.container.length}empty(){return 0===this.length}toString(){return this.container.toString()}}},function(t,r,e){const n=e(8);t.exports=n},function(t,r){t.exports=class{constructor(){this.container=Array.from(arguments)}enqueue(t){this.container.push(t)}dequeue(){return this.container.shift()}peek(){return this.container[0]}get length(){return this.container.length}toString(){return this.container.toString()}isEmpty(){return 0===this.length}values(){return this.container.map(t=>t)}}},function(t,r){const e=(t,r)=>t-r,n=(t,r)=>{for(let e=0;e<t.length;e++)if(t[e]===r)return e;return-1},i=(t,r,e)=>{const n=t[r];t[r]=t[e],t[e]=n};t.exports=class{constructor(t=e){this.array=[],this.comparator=t}get length(){return this.array.length}peek(){return this.array[0]}push(t){this.array.push(t),this.heapifyUp()}heapifyUp(){let t=this.array.length-1;for(;this.hasParent(t)&&this.comparator(this.parent(t),this.array[t])>0;)i(this.array,this.getParentIndex(t),t),t=this.getParentIndex(t)}pop(){i(this.array,0,this.array.length-1);const t=this.array.pop();return this.heapifyDown(0),t}delete(t){let r=0;t&&(r=n(this.array,t)),r<0||(i(this.array,r,this.array.length-1),this.array.pop(),this.heapifyDown(r))}heapifyDown(t){for(;this.hasLeftChild(t);){let r=this.getLeftChildIndex(t);if(this.hasRightChild(t)&&this.comparator(this.getLeftChild(t),this.getRightChild(t))>0&&(r=this.getRightChildIndex(t)),!(this.comparator(this.array[t],this.array[r])>0))break;i(this.array,t,r),t=r}}getParentIndex(t){return Math.floor((t-1)/2)}hasParent(t){return this.getParentIndex(t)>=0}parent(t){return this.array[this.getParentIndex(t)]}getLeftChildIndex(t){return 2*t+1}getRightChildIndex(t){return 2*t+2}hasLeftChild(t){return this.getLeftChildIndex(t)<this.array.length}hasRightChild(t){return this.getRightChildIndex(t)<this.array.length}getRightChild(t){return this.array[this.getRightChildIndex(t)]}getLeftChild(t){return this.array[this.getLeftChildIndex(t)]}}}]));
