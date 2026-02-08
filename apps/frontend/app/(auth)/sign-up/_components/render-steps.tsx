import { useRegistrationContext } from '@/contexts/registration-context';
import Step1Form from './step1-form';
import Step2Form from './step2-form';
import Step3Form from './step3-form';
import Step4Form from './step4-form';
import Step5Form from './step5-form';
import Step6Form from './step6-form';

export default function RenderSteps() {
  const { step } = useRegistrationContext();

  switch (step) {
    case 1:
      return <Step1Form />;

    case 2:
      return <Step2Form />;

    case 3:
      return <Step3Form />;

    case 4:
      return <Step4Form />;

    case 5:
      return <Step5Form />;

    case 6:
      return <Step6Form />;

    default:
      return null;
  }
}
