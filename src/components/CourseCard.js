import * as Icons from "lucide-react";

export default function CourseCard({ course }) {
  // Database ke string naam se real Lucide Icon dhoondo
  const IconComponent = Icons[course.icon_name] || Icons.BookOpen;

  return (
    <article className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col justify-between min-h-[150px]">
      <div>
        <div className="text-purple-400 bg-purple-500/10 p-2 rounded-xl w-fit border border-purple-500/20 mb-3">
          <IconComponent size={20} />
        </div>

        <h4 className="font-bold text-white text-lg leading-snug">
          {course.title}
        </h4>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-xs font-medium text-neutral-400 mb-1">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>
        {/* Progress Bar Container */}
        <div className="w-full bg-neutral-950 h-2 rounded-full overflow-hidden border border-neutral-800">
          <div
            className="bg-purple-500 h-full rounded-full"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>
    </article>
  );
}