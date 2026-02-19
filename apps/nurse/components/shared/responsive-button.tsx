'use client';

import { Button } from '@workspace/ui/components/button';
import { useIsMobile } from '@workspace/ui/hooks/use-mobile';

type ResponsiveButtonProps = React.ComponentProps<typeof Button>;

export default function ResponsiveButton(props: ResponsiveButtonProps) {
  const isMobile = useIsMobile();

  return <Button size={isMobile ? 'sm' : 'default'} {...props} />;
}
