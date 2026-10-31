(() => {
 const paths={
  '↗':'M5 19 19 5M5 5h14v14',
  '↖':'M19 19 5 5M5 19V5h14',
  '↙':'M19 5 5 19M5 5v14h14',
  '↑':'M12 20V4m-7 7 7-7 7 7',
  '↓':'M12 4v16m-7-7 7 7 7-7'
 };
 const arrowPattern=/[↗↖↙↑↓]/;
 function svg(character){const element=document.createElementNS('http://www.w3.org/2000/svg','svg');element.setAttribute('viewBox','0 0 24 24');element.setAttribute('class','arrow-icon');element.setAttribute('aria-hidden','true');element.setAttribute('focusable','false');element.setAttribute('fill','none');element.setAttribute('stroke','currentColor');element.setAttribute('stroke-width','1.75');element.setAttribute('stroke-linecap','round');element.setAttribute('stroke-linejoin','round');const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',paths[character]);element.append(path);return element}
 function replaceArrows(){const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:node=>!node.parentElement.closest('script,style,svg,textarea,code')&&arrowPattern.test(node.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT});const nodes=[];let node;while(node=walker.nextNode())nodes.push(node);for(const item of nodes){const parts=item.nodeValue.split(/([↗↖↙↑↓])/),fragment=document.createDocumentFragment();for(const part of parts){if(!part)continue;fragment.append(paths[part]?svg(part):document.createTextNode(part))}item.replaceWith(fragment)}}
 replaceArrows();new MutationObserver(replaceArrows).observe(document.body,{subtree:true,childList:true,characterData:true});
})();
