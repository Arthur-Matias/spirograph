import{p as b}from"./vendor.a21a2c2c.js";const x=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}};x();function L(t){let n,a,l=100,o=10,i=t.TAU/o,u=2;function h(){t.createCanvas(t.windowWidth,t.windowHeight),t.angleMode(t.RADIANS),a=t.createSlider(10,500,10,1),a.position(100,100),n=t.createSlider(2,100,2,.01),n.position(100,130)}function g(){t.background(0),t.translate(t.width/2,t.height/2),t.noFill(),t.strokeWeight(1),t.stroke(255),t.circle(0,0,2*l),o=Number(a.value()),u=Number(n.value()),i=t.TAU/o,y(),w(),k(u)}function y(){let c="Multiplier: "+u,s="Total points: "+o;t.translate(0,0),t.text(s,-100,-240),t.text(c,-100,-210)}function w(){for(let c=0;c<o;c++){let s=l*t.sin(i*c),e=l*t.cos(i*c);t.stroke(255,0,0,255),t.strokeWeight(4),t.point(s,e)}}function k(c){for(let s=0;s<o;s++){let e=l*t.sin(i*s),p=l*t.cos(i*s);t.stroke(255,10),t.strokeWeight(1),t.point(e,p);let f=s*c;for(;f>=o;)f-=o;let m={x:l*t.sin(i*f),y:l*t.cos(i*f)};t.stroke(255,0,0,100),t.strokeWeight(2),t.line(e,p,m.x,m.y)}}t.setup=h,t.draw=g}new b(L);