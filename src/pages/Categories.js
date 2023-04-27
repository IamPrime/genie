import Image from "next/image";
import { Inter } from "next/font/google";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

export default function Categories() {
  const [user, loading] = useAuthState(auth);

  if (!user) {
    return (
      <section className="grid items-center gap-10 mt-10">
        <div className="flex justify-center space-x-10">
          <div className="relative">
            <div className="group block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
              <Image
                className="rounded-t-lg"
                src="/images/science.png"
                alt=""
                width={640}
                height={427}
              />
              <a href={"/auth/Login"}>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Science
                  </h5>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-gray-400 mr-1"
                    />
                    <span className="text-sm text-gray-600">(24)</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                      <p className="font-bold text-lg">Learn More</p>
                      <p className="text-gray-600 mt-4">
                        Science is a systematic endeavor that builds and
                        organizes knowledge in the form of testable explanations
                        and predictions about the universe. The earliest written
                        records of identifiable predecessors to modern science
                        come from Ancient Egypt and Mesopotamia from around 3000
                        to 1200 BCE.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="relative">
            <a href={"/auth/Login"}>
              <div className="group block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                <Image
                  className="rounded-t-lg"
                  src="/images/technology.png"
                  alt=""
                  width={640}
                  height={427}
                />
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Technology
                  </h5>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-gray-300 mr-1"
                    />
                    <span className="text-sm text-gray-500">(3)</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                      <p className="font-bold text-lg">Learn More</p>
                      <p className="text-gray-600 mt-4">
                        Technology is the application of knowledge for achieving
                        practical goals in a reproducible way. The word
                        technology can also mean the products resulting from
                        such efforts, including both tangible tools such as
                        utensils or machines, and intangible ones such as
                        software
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="relative">
            <a href={"/auth/Login"}>
              <div className="group block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                <Image
                  className="rounded-t-lg"
                  src="/images/maths.png"
                  alt=""
                  width={640}
                  height={427}
                />
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Mathematics
                  </h5>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-gray-300 mr-1"
                    />
                    <span className="text-sm text-gray-500">(3)</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                      <p className="font-bold text-lg">Learn More</p>
                      <p className="text-gray-600 mt-4">
                        It is the study of the nature and properties of numbers.
                        It includes study of the algorithms of calculation with
                        numbers, namely the basic operations of addition,
                        subtraction, multiplication, and division, as well as
                        the taking of powers and roots.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center space-x-10">
          <div className="relative">
            <a href={"/auth/Login"}>
              <div className="group block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                <Image
                  className="rounded-t-lg"
                  src="/images/engineering.png"
                  alt=""
                  width={640}
                  height={427}
                />
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Engineering
                  </h5>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-gray-400 mr-1"
                    />
                    <span className="text-sm text-gray-600">(24)</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                      <p className="font-bold text-lg">Learn More</p>
                      <p className="text-gray-600 mt-4">
                        Engineering is the use of scientific principles to
                        design and build machines, structures, and other items,
                        including bridges, tunnels, roads, vehicles, and
                        buildingspiscing elit. Ut at urna eu tellus ullamcorper
                        tristique.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="relative">
            <a href={"/auth/Login"}>
              <div className="group block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                <Image
                  className="rounded-t-lg"
                  src="/images/sss.png"
                  alt=""
                  width={640}
                  height={427}
                />
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Social Sciences
                  </h5>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-gray-300 mr-1"
                    />
                    <span className="text-sm text-gray-500">(3)</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                      <p className="font-bold text-lg">Learn More</p>
                      <p className="text-gray-600 mt-4">
                        Social science is one of the branches of science,
                        devoted to the study of societies and the relationships
                        among individuals within those societies. The term was
                        formerly used to refer to the field of sociology, the
                        original "science of society".
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="relative">
            <a href={"/auth/Login"}>
              <div className="group block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                <Image
                  className="rounded-t-lg"
                  src="/images/generalknowledge.jpg"
                  alt=""
                  width={640}
                  height={427}
                />
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    General Knowledge
                  </h5>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-gray-300 mr-1"
                    />
                    <span className="text-sm text-gray-500">(3)</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                      <p className="font-bold text-lg">Learn More</p>
                      <p className="text-gray-600 mt-4">
                        General knowledge is information that has been
                        accumulated over time through various mediums and
                        sources. It excludes specialized learning that can only
                        be obtained with extensive training and information
                        confined to a single medium. General knowledge is an
                        essential component of crystallized intelligence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }
  if (user) {
    return (
      <section className="grid items-center gap-10 mt-10">
        <div className="flex justify-center space-x-10">
          <div className="relative">
            <div className="group block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
              <Image
                className="rounded-t-lg"
                src="/images/science.png"
                alt=""
                width={640}
                height={427}
              />
              <a href={"/private/Dashboard"}>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Science
                  </h5>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-gray-400 mr-1"
                    />
                    <span className="text-sm text-gray-600">(24)</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                      <p className="font-bold text-lg">Learn More</p>
                      <p className="text-gray-600 mt-4">
                        Science is a systematic endeavor that builds and
                        organizes knowledge in the form of testable explanations
                        and predictions about the universe. The earliest written
                        records of identifiable predecessors to modern science
                        come from Ancient Egypt and Mesopotamia from around 3000
                        to 1200 BCE.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="relative">
            <a href={"/private/Dashboard"}>
              <div className="group block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                <Image
                  className="rounded-t-lg"
                  src="/images/technology.png"
                  alt=""
                  width={640}
                  height={427}
                />
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Technology
                  </h5>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-gray-300 mr-1"
                    />
                    <span className="text-sm text-gray-500">(3)</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                      <p className="font-bold text-lg">Learn More</p>
                      <p className="text-gray-600 mt-4">
                        Technology is the application of knowledge for achieving
                        practical goals in a reproducible way. The word
                        technology can also mean the products resulting from
                        such efforts, including both tangible tools such as
                        utensils or machines, and intangible ones such as
                        software
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="relative">
            <a href={"/private/Dashboard"}>
              <div className="group block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                <Image
                  className="rounded-t-lg"
                  src="/images/maths.png"
                  alt=""
                  width={640}
                  height={427}
                />
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Mathematics
                  </h5>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-gray-300 mr-1"
                    />
                    <span className="text-sm text-gray-500">(3)</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                      <p className="font-bold text-lg">Learn More</p>
                      <p className="text-gray-600 mt-4">
                        It is the study of the nature and properties of numbers.
                        It includes study of the algorithms of calculation with
                        numbers, namely the basic operations of addition,
                        subtraction, multiplication, and division, as well as
                        the taking of powers and roots.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center space-x-10">
          <div className="relative">
            <a href={"/private/Dashboard"}>
              <div className="group block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                <Image
                  className="rounded-t-lg"
                  src="/images/engineering.png"
                  alt=""
                  width={640}
                  height={427}
                />
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Engineering
                  </h5>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-gray-400 mr-1"
                    />
                    <span className="text-sm text-gray-600">(24)</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                      <p className="font-bold text-lg">Learn More</p>
                      <p className="text-gray-600 mt-4">
                        Engineering is the use of scientific principles to
                        design and build machines, structures, and other items,
                        including bridges, tunnels, roads, vehicles, and
                        buildingspiscing elit. Ut at urna eu tellus ullamcorper
                        tristique.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="relative">
            <a a href={"/private/Dashboard"}>
              <div className="group block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                <Image
                  className="rounded-t-lg"
                  src="/images/sss.png"
                  alt=""
                  width={640}
                  height={427}
                />
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Social Sciences
                  </h5>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-gray-300 mr-1"
                    />
                    <span className="text-sm text-gray-500">(3)</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                      <p className="font-bold text-lg">Learn More</p>
                      <p className="text-gray-600 mt-4">
                        Social science is one of the branches of science,
                        devoted to the study of societies and the relationships
                        among individuals within those societies. The term was
                        formerly used to refer to the field of sociology, the
                        original "science of society".
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="relative">
            <a a href={"/private/Dashboard"}>
              <div className="group block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                <Image
                  className="rounded-t-lg"
                  src="/images/generalknowledge.jpg"
                  alt=""
                  width={640}
                  height={427}
                />
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    General Knowledge
                  </h5>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-gray-300 mr-1"
                    />
                    <span className="text-sm text-gray-500">(3)</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                      <p className="font-bold text-lg">Learn More</p>
                      <p className="text-gray-600 mt-4">
                        General knowledge is information that has been
                        accumulated over time through various mediums and
                        sources. It excludes specialized learning that can only
                        be obtained with extensive training and information
                        confined to a single medium. General knowledge is an
                        essential component of crystallized intelligence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
