import React from 'react'

function Sample() {
  return (
    <div>
      <div id="default-carousel" class="relative w-full" data-carousel="slide">

        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        </div>
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        </div>

        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>

        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>

        </button>
      </div>

    </div>
  )
}

export default Sample
