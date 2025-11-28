import WindowWrapper from "#hoc/WindowWrapper";
import {WindowControls} from "#components";
import useWindowStore from "#store/window";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows?.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data || {};

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                {name && <h2>{name}</h2>}
            </div>

            <div className="p-5 space-y-5 bg-white rounded-lg shadow-lg max-w-md mx-auto text-center flex flex-col items-center justify-center gap-5">
                {image && (
                    <img
                        src={image}
                        alt={name || "text file image"}
                        className="w-full h-auto rounded "
                    />
                )}

                {subtitle && <h3 className="text-lg font-semibold">{subtitle}</h3>}

                {Array.isArray(description) && description.length > 0 && (
                    <div className="space-y-3 leading-relaxed text-base text-gray-800">
                        {description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
