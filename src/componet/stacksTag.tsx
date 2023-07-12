interface Props {
  tag: string[];
}
function Tags(props: Props) {
  const { tag } = props;
  return (
    <div className="flex">
      {tag.map((v, index) => (
        <p
          key={index}
          className="border-[2px] min-w-max rounded-3xl font-extrabold border-zinc-950 font-['watermelonSalad'] text-zinc-950 m-0 mr-3 p-2"
        >
          {v}
        </p>
      ))}
    </div>
  );
}
export default Tags;
