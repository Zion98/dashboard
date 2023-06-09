import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/20/solid";

interface ListBoxProps {
  setSelectedYear: (
    value: React.SetStateAction<{ label: string; value: number }>
  ) => void;
  selectedYear: { label: string; value: number };
  yearOptions: { label: string; value: number }[];
}
export const SelectBox: React.FunctionComponent<ListBoxProps> = ({
  setSelectedYear,
  selectedYear,
  yearOptions,
}) => {
  return (
    <Listbox
      value={selectedYear}
      onChange={(value) => {
        setSelectedYear(value);
      }}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate">{selectedYear.label}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {yearOptions.map((year, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-6 pr-4 ${
                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={year}>
                {({ selected }) => (
                  <>
                    <span
                      className={`block  ${
                        selected ? "font-medium" : "font-normal"
                      }`}>
                      {year.label}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-1 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
