import { Button } from '@workspace/ui/components/button';
import { ButtonGroup } from '@workspace/ui/components/button-group';
import { Toggle } from '@workspace/ui/components/toggle';
import { Grid3x3Icon, ListIcon } from 'lucide-react';

export default function LayoutToggle() {
  return (
    <div className='col-span-1'>
      <ButtonGroup>
        <Button variant='outline' asChild>
          <Toggle aria-label='Toggle italic'>
            <ListIcon className={'size-4 stroke-primary'} />
          </Toggle>
        </Button>
        <Button variant='outline' asChild>
          <Toggle aria-label='Toggle bold'>
            <Grid3x3Icon className={'size-4 stroke-primary'} />
          </Toggle>
        </Button>
      </ButtonGroup>
    </div>
  );
}
