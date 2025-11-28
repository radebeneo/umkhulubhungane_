import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

const ImageFile = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data || {};

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        {name && <h2>{name}</h2>}
      </div>

      <div className="p-5 bg-white rounded-lg shadow-lg max-w-2xl mx-auto text-center">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name || "image file"}
            className="w-full h-auto max-h-[70vh] object-contain rounded "
            onError={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              el.style.display = "none";
            }}
          />
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(ImageFile, "imgfile");
export default ImageWindow;
