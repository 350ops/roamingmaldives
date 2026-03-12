import { siteConfig } from '@/lib/site';

type BrandWordmarkProps = {
  className?: string;
  leadClassName?: string;
  trailClassName?: string;
};

export function BrandWordmark({
  className = '',
  leadClassName = '',
  trailClassName = '',
}: BrandWordmarkProps) {
  const suffix = 'maldives';
  const normalizedName = siteConfig.name.toLowerCase();
  const hasSuffix = normalizedName.endsWith(suffix);
  const lead = hasSuffix ? normalizedName.slice(0, -suffix.length) : normalizedName;
  const trail = hasSuffix ? suffix : '';

  return (
    <span className={className}>
      <span className={leadClassName}>{lead}</span>
      {trail ? <span className={trailClassName}>{trail}</span> : null}
    </span>
  );
}
