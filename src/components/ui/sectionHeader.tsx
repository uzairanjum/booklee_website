import { colors } from '@/constants/colors';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  smallHeading?: string;
  mainHeading?: string;
  description?: string;
  headingClass?: string;
  marginBottom?: number;
}

const SectionHeader = ({
  smallHeading,
  mainHeading,
  description,
  headingClass,
  marginBottom,
}: SectionHeaderProps) => {
  const getMarginClass = (margin?: number) => {
    if (!margin) return 'mb-16';

    // Map common margin values to Tailwind classes
    const marginMap: Record<number, string> = {
      0: 'mb-0',
      1: 'mb-1',
      2: 'mb-2',
      3: 'mb-3',
      4: 'mb-4',
      5: 'mb-5',
      6: 'mb-6',
      8: 'mb-8',
      10: 'mb-10',
      12: 'mb-12',
      16: 'mb-16',
      20: 'mb-20',
      24: 'mb-24',
      32: 'mb-32',
      40: 'mb-40',
      48: 'mb-48',
      56: 'mb-56',
      64: 'mb-64',
    };

    return marginMap[margin] || 'mb-16';
  };

  return (
    <div
      className={cn(
        getMarginClass(marginBottom),
        'flex flex-col items-center justify-center text-center'
      )}
    >
      <h2 className={`text-md font-medium text-[${colors.slateGray}] mb-4`}>
        {smallHeading}
      </h2>
      <h1
        className={`text-3xl md:text-4xl font-bold text-[${colors.black}] mb-4 ${headingClass}`}
      >
        {mainHeading}
      </h1>
      <p
        className={`text-sm text-[${colors.slateGray}] leading-relaxed max-w-3xl mx-auto `}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
