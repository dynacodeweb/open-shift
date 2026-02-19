import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@workspace/ui/components/select';

export default function RateFilter() {
  return (
    <div className='col-span-2 lg:col-span-1'>
      <Select>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Select a rate' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Rate: $40-$80</SelectLabel>
            <SelectItem value='apple'>Apple</SelectItem>
            <SelectItem value='banana'>Banana</SelectItem>
            <SelectItem value='blueberry'>Blueberry</SelectItem>
            <SelectItem value='grapes'>Grapes</SelectItem>
            <SelectItem value='pineapple'>Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
