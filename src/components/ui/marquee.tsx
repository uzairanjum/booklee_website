'use client';
import Image from 'next/image';
import { colors } from '@/constants/colors';

interface MarqueeProps {
  images?: string[];
  speed?: number;
  logoSize?: number;
  gap?: number;
  pauseOnHover?: boolean;
}
const extraLogos = [
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735cb4304bd8429822f9_Clients%20logo.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e92012003ed7a9e37e76c_Real%20Client%20Logo.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735ce9ca59885cb34fba_Clients%20logo-1.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e92cd5d45334030f890f7_Real%20Client%20Logo.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735ebd5c953f4af1197b_Real%20Client%20Logo.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735c13b9da3bb2208ecf_Clients%20logo-2.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735cde21abbe3109671d_Clients%20logo-3.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735ee25aa9a3bf7f48b1_Clients%20logo-4.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735e40d8d0a39f8bd8c7_Real%20Client%20Logo-3.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735ed0325c275dd4e73a_Real%20Client%20Logo-4.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e7361ed621a1c51b3b9fa_Real%20Client%20Logo-5.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735e092d5c8c7d2d46ad_Real%20Client%20Logo-6.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735e7754917678068182_Real%20Client%20Logo-7.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e960282df0411e92ef4c9_Real%20Client%20Logo.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735e21f41aa17cd34b49_Real%20Client%20Logo-9.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735ece3d8e79f494952e_Real%20Client%20Logo-1.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735d6ca0deeacf8c544d_Real%20Client%20Logo-11.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735d608c6953a04cab67_Real%20Client%20Logo-12.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735ce8da41cacf80a1b9_Real%20Client%20Logo-13.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e99f93f7544b2eda3f6db_Real%20Client%20Logo.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735cb23566f9b0c44b6e_Real%20Client%20Logo-14.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735d3f0912b6a3299912_Real%20Client%20Logo-15.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735d776fe93c795a5931_Real%20Client%20Logo-16.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735cd1615d56ca50dbb9_Real%20Client%20Logo-17.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735d776fe93c795a59bc_Real%20Client%20Logo-18.svg',
  'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685e735ea3cd368917f23a7b_Real%20Client%20Logo-10.svg',
];

const Marquee: React.FC<MarqueeProps> = ({
  images = extraLogos,
  speed = 30,
  logoSize = 120,
  gap = 64,
  pauseOnHover = true,
}) => {
  const duplicatedImages = [...images, ...images];

  return (
    <div
      className={`w-full bg-[${colors.white}] pt-10 pb-6 overflow-hidden`}
    >
      <div className='max-w-7xl mx-auto px-4'>
        <h2
          className={`text-xl font-bold text-center text-[${colors.black}] mb-8`}
        >
          Trusted by Leading Companies
        </h2>

        <div className='relative '>
          {' '}
          {/* overflow-hidden for fade effect */}
          <div
            className={`flex ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
            style={{
              animation: `scroll ${speed}s linear infinite`,
              gap: `${gap}px`,
            }}
          >
            {duplicatedImages.map((src, idx) => (
              <div
                key={idx}
                // className='flex-shrink-0 flex items-center justify-center'
                style={{
                  width: `${logoSize}px`,
                  height: `${logoSize * 0.6}px`,
                }}
              >
                <Image
                  src={src}
                  alt={`Client Logo ${idx + 1}`}
                  width={logoSize}
                  height={logoSize}
                  className='max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100'
                />
              </div>
            ))}
          </div>
          {/* Gradient overlays for fade effect */}
          {/* <div className='absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10' />
          <div className='absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10' /> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
