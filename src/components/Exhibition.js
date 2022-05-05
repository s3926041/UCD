import React from "react";
import toast, { Toaster } from "react-hot-toast";
function Exhibition() {
  return (
    <div className="min-h-[800px] 2xl:min-h[1000px] relative z-[0] ">
      <Toaster className="" />
      <div className="top-[120px] absolute w-[75vw] mx-[12.5vw] h-[40vh] z-[0]">
        <h1 className="font-bold text-[crimson] text-[40px] 2xl:text-[60px] text-center ">
          Exhibition
        </h1>
        <div className="grid grid-cols-2  place-items-center">
          <div className="my-[40px]">
            <div className="sketchfab-embed-wrapper ">
              {" "}
              <iframe
                className="rounded-[1rem]"
                title="Cyan Artifact"
                frameBorder="0"
                allowFullscreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                src="https://sketchfab.com/models/0077b6c8d2984a8cb79fa213d1a438b0/embed?ui_theme=dark"
              >
                {" "}
              </iframe>{" "}
            </div>
            <h1 className="font-bold text-center">Cyan Artifact</h1>
          </div>

          <div className="my-[40px]">
            {" "}
            <div className="sketchfab-embed-wrapper ">
              {" "}
              <iframe
                className="rounded-[1rem]"
                title="Clay Artifact 3D Scan"
                frameBorder="0"
                allowFullscreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                src="https://sketchfab.com/models/9647779e0a1140228c0238151f0dc26c/embed?ui_theme=dark"
              >
                {" "}
              </iframe>
            </div>
            <h1 className="font-bold text-center">Clay Artifact</h1>
          </div>

          <div className="my-[40px]">
            {" "}
            <div className="sketchfab-embed-wrapper">
              {" "}
              <iframe
                className="rounded-[1rem]"
                title="The Atis Artifact"
                frameBorder="0"
                allowFullscreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                src="https://sketchfab.com/models/18aea2ce53444eb79440435b25cbef9a/embed"
              >
                {" "}
              </iframe>{" "}
            </div>
            <h1 className="font-bold text-center">Atis Artifact</h1>
          </div>
          <div className="my-[40px]">
            {" "}
            <div className="sketchfab-embed-wrapper ">
              {" "}
              <iframe
                className="rounded-[1rem]"
                title="Ancient Artifact"
                frameBorder="0"
                allowFullscreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                src="https://sketchfab.com/models/1c3697d8ae314c5b9e7b41da4499c092/embed"
              >
                {" "}
              </iframe>{" "}
            </div>
            <h1 className="font-bold text-center">Ancient Artifact</h1>
          </div>
      
        </div>
      </div>
    </div>
  );
}

export default Exhibition;
