import RevealOnScroll from "./RevealOnScroll"

interface Tag {
  label: string
  color: string
}

interface TimelineItemProps {
  year: string
  title: string
  school: string
  tags: Tag[]
  color: string
  side: "left" | "right"
  index: number
}

export default function TimelineItem({
  year,
  title,
  school,
  tags,
  color,
  side,
  index,
}: TimelineItemProps) {
  return (
    <RevealOnScroll delay={index * 0.2}>
      <div className="relative mb-12">
        <div className="md:flex items-center justify-between">
          {side === "left" ? (
            <>
              <div className="md:w-5/12 md:text-right md:pr-8 mb-4 md:mb-0 ml-12 md:ml-0">
                <div className="glass rounded-2xl p-6 hover:border-accent/30 transition-all">
                  <div className={`text-${color} font-mono text-sm mb-2`}>{year}</div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-white/50 text-sm mb-2">{school}</p>
                  <div className="flex items-center gap-2 md:justify-end flex-wrap">
                    {tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full bg-${tag.color}/10 text-${tag.color} text-xs`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={`absolute left-4 md:left-1/2 w-4 h-4 bg-${color} rounded-full border-4 border-[#0a0a0a] transform -translate-x-1/2 z-10`}
              />
              <div className="md:w-5/12 md:pl-8 hidden md:block" />
            </>
          ) : (
            <>
              <div className="md:w-5/12 hidden md:block" />
              <div
                className={`absolute left-4 md:left-1/2 w-4 h-4 bg-${color} rounded-full border-4 border-[#0a0a0a] transform -translate-x-1/2 z-10`}
              />
              <div className="md:w-5/12 md:pl-8 mb-4 md:mb-0 ml-12 md:ml-0">
                <div className="glass rounded-2xl p-6 hover:border-coral/30 transition-all">
                  <div className={`text-${color} font-mono text-sm mb-2`}>{year}</div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-white/50 text-sm mb-2">{school}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full bg-${tag.color}/10 text-${tag.color} text-xs`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </RevealOnScroll>
  )
}