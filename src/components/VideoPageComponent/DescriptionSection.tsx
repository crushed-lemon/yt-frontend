export interface IDescriptionSectionProps {
    videoId : string
}

export function DescriptionSection (props: IDescriptionSectionProps) {
  return (
    <div className='font-bold py-4'>
      Describing video { props.videoId }
    </div>
  );
}
