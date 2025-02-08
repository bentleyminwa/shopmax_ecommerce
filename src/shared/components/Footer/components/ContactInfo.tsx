import { appData } from "../../../../assets/data/data";

const ContactInfo = () => {
  const { contactInfos } = appData;

  return (
    <div className="space-y-10 w-full">
      <h2 className="text-2xl font-semibold">Get in Touch</h2>
      <div className="space-y-5">
        {contactInfos.map((info) => {
          return (
            <div key={info.title} className="flex items-center gap-3">
              <h2 className="text-2xl">{info.icon}</h2>
              <div>
                <h3 className="text-lg font-semibold">{info.title}</h3>
                <p className="text-sm tracking-wider text-gray-300">
                  {info.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
