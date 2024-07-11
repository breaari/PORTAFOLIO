// src/components/Preloader.js
import React, { useState, useEffect } from 'react';

export const Preloader = () => {

  return (
   
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
        <div className="loader"></div>
      </div>
    )
};
