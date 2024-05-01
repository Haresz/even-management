import React from 'react';

export default function InputFile(props: any) {
  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="file_input"
      >
        Upload file
      </label>
      <input
        type="file"
        className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-pink-50 file:text-pink-700
        hover:file:bg-pink-100 border-2 rounded-md border-redDark"
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  );
}
