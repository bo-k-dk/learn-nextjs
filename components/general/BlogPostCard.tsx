import Image from "next/image";
import Link from "next/link";

export interface iappProps {
  data: {
    id: string;
    title: string;
    content: string;
    image_url: string;
    auther_id: string;
    auther_name: string;
    auther_image: string;
    created_at: Date;
    updated_at: Date;
  };
}

export function BlogPostCard({ data }: iappProps) {
  return (
    <div className="group relative overflow-hidden round-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
      <Link href={`/post/${data.id}`} className="block w-full h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={data.image_url}
            alt="Image for Blog Post"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            {data.title}
          </h3>

          <p className="mb-4 text-sm font-semibold text-gray-600 line-clamp-2">
            {data.content}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative size-8 overflow-hidden rounded-full">
                <Image
                  src={data.auther_image}
                  alt={data.auther_name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">
                {data.auther_name}
              </p>
            </div>

            <time className="text-xs text-gray-500">
              {new Intl.DateTimeFormat("da-DK", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              }).format(data.created_at)}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
}
