// app/api/tasks/route.ts
// Mini API fuer GET und POST.

const tasks = [{ id: 1, title: "Erste Task" }];

export async function GET() {
  return Response.json(tasks);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newTask = { id: tasks.length + 1, title: body.title ?? "Ohne Titel" };
  tasks.push(newTask);
  return Response.json(newTask, { status: 201 });
}
