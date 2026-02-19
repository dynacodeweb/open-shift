import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@workspace/ui/components/input-group';
import { SearchIcon } from 'lucide-react';

export default function InputFilter() {
  return (
    <InputGroup className={'col-span-full md:col-span-4'}>
      <InputGroupInput placeholder='Search by location or facility...' />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}
