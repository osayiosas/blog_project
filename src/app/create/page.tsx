"use client";

import Button from "@/components/button";
import { firebaseConfig, formControls } from "@/utils";
import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);
const stroage = getStorage(app, "gs://blog-project-164a6.appspot.com");

function createUniqueFileName(fileName: string) {
  const timeStamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 12);

  return `${fileName}-${randomString}-${timeStamp}`;
}

async function handleImageSaveToFirebae(file: any) {
  const extractUniqueFileName = createUniqueFileName(file?.name);
  const stroageRef = ref(stroage, `blog/${extractUniqueFileName}`);
  const uploadImage = uploadBytesResumable(stroageRef, file);

  return new Promise((resolve, reject) => {
    uploadImage.on(
      "state_changed",
      (snapshot) => {},
      (error) => reject(error),
      () => {
        getDownloadURL(uploadImage.snapshot.ref)
          .then((url) => resolve(url))
          .catch((error) => reject(error));
      }
    );
  });
}

export default function Create() {
  const [imageLoading, setImageLoading] = useState<boolean>(false);

  async function handleBlogImageChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (!event.target.files) return;
    setImageLoading(true);
    const saveImageToFirebase = await handleImageSaveToFirebae(
      event.target.files[0]
    );

    if (saveImageToFirebase !== "") {
      setImageLoading(false);
      console.log(saveImageToFirebase, 'saveImageToFirebase');
    }
  }

  return (
    <section className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 rounded-md bg-primary/[3%] py-10 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] ">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:2xl xl:text-2xl">
                Write Your Own Story
              </h2>
              <div>
                <div className="flex flex-col gap-3">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      Upload image
                    </label>
                    <input
                      id="fileinput"
                      accept="image/*"
                      max={1000000}
                      type="file"
                      onChange={handleBlogImageChange}
                      className="w-full mb-8 rounded-md border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242b51] dark:shadow-signUp"
                    />
                  </div>

                  <div className="-mx-4 flex flex-wrap">
                    {formControls.map((control, index) => (
                      <div key={index} className="w-full px-4">
                        <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          {control.label}
                        </label>
                        {control.component === "input" ? (
                          <input
                            type={control.type}
                            name={control.id}
                            placeholder={control.placeholder}
                            className="w-full mb-8 rounded-md border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242b51] dark:shadow-signUp"
                          />
                        ) : control.component === "textarea" ? (
                          <textarea
                            placeholder={control.placeholder}
                            rows={5}
                            name={control.id}
                            className="w-full mb-8 rounded-md border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242b51] dark:shadow-signUp"
                          />
                        ) : control.component === "select" ? (
                          <select
                            key={index}
                            name={control.id}
                            placeholder={control.placeholder}
                            className="w-full resize-none mb-8 rounded-md border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242b51] dark:shadow-signUp"
                          >
                            <option value={""} id="">
                              Select
                            </option>
                            {control.options.map((optionItem, index) => (
                              <option
                                key={index}
                                id={optionItem.value}
                                value={optionItem.value}
                              >
                                {optionItem.label}
                              </option>
                            ))}
                          </select>
                        ) : null}
                      </div>
                    ))}
                    <div className="w-full px-4">
                      <Button text="Create New Story" onClick={() => {}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
