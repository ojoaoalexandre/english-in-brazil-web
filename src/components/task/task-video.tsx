'use client'

export const TaskVideo = ({
  link,
}: {
  link: string
}) => {

  return (
      <div className="flex justify-center py-4">
        <iframe
          src={link}
          allowFullScreen={true}
          className="border-none top-0 left-0 w-full max-w-lg h-48 md:h-72 lg:max-w-2xl lg:h-96"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
        />
      </div>
  );
}
