import { cva } from 'class-variance-authority';


export const seedCardVariant = cva(
`relative flex flex-col w-full min-h-48 rounded-xl bg-gray-10 border border-gray-100 p-3 cursor-pointer hover:scale-[98%] transition duration-100`,
  {
    variants: {
      mode: {
        active :'',
        inactive: 'bg-gray-50'
      },
    },
  },
);
