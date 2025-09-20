export const ContactUs = ({ title = "" }) => (
  <div className="gap-3.5 flex">
    <div className="flex items-center justify-center">
      <input
        type="radio"
        name="type"
        className="accent-green border rounded-full w-7 h-7 cursor-pointer"
      />
    </div>
    <div>
      <div className="text-lg font-normal">{title}</div>
    </div>
  </div>
);

export const Contact = ({ title = "",Input ="", Placeholder="" }) => (
    <div>
    <p className="font-normal text-base"> {title}</p>
        <input type={Input} placeholder={Placeholder} className="border bg-white rounded-2xl w-full py-5 pl-7.5 mt-2"/>
    </div>
);


