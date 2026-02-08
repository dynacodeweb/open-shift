'use client';

import { useConfirmAddress } from '@mapbox/search-js-react';
import {
  AddressConfirmOptions,
  AddressConfirmShowResult,
} from '@mapbox/search-js-web';
import { createContext, useContext, useState, useTransition } from 'react';

type RegistrationContextType = {
  step: number;
  prevStep: (newStep: number) => void;
  nextStep: (newStep: number) => void;
  isSignUpPending: boolean;
  startSignUpTransition: (callback: () => void) => void;
  isValidAddress: boolean;
  onAddressValidation: (isValid: boolean) => void;
  formRef: React.RefObject<HTMLFormElement>;
  showConfirm: (
    options?: Partial<AddressConfirmOptions>,
  ) => Promise<AddressConfirmShowResult>;
};

export const RegistrationContext = createContext({} as RegistrationContextType);
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
if (!ACCESS_TOKEN) {
  throw new Error('Mapbox access token is required');
}
export function RegistrationContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [step, setStep] = useState(1);
  const [isValidAddress, setIsValidAddress] = useState(false);
  const [isSignUpPending, startSignUpTransition] = useTransition();

  const { formRef, showConfirm } = useConfirmAddress({
    accessToken: ACCESS_TOKEN!,
    footer: 'My custom footer',
    theme: {
      variables: {
        border: '3px solid rgba(0,0,0,0.35)',
        borderRadius: '18px',
      },
    },
    minimap: {
      defaultMapStyle: ['mapbox', 'outdoors-v11'],
      satelliteToggle: true,
    },
    skipConfirmModal: (feature) => false, // overrides default behavior, show dialog every time
  });

  function prevStep(newStep: number) {
    if (newStep < 1 || newStep > 6) return;
    setStep(newStep);
  }

  function nextStep(newStep: number) {
    if (newStep < 1 || newStep > 6) return;
    setStep(newStep);
  }

  function handleAddressValidation(isValid: boolean) {
    setIsValidAddress(isValid);
  }

  return (
    <RegistrationContext.Provider
      value={{
        step,
        prevStep,
        nextStep,
        isValidAddress,
        onAddressValidation: handleAddressValidation,
        formRef,
        showConfirm,
        isSignUpPending,
        startSignUpTransition,
      }}>
      {children}
    </RegistrationContext.Provider>
  );
}

export function useRegistrationContext() {
  const context = useContext(RegistrationContext);

  if (!context) {
    throw new Error(
      'useRegistrationContext must be used within a RegistrationProvider',
    );
  }

  return context;
}
