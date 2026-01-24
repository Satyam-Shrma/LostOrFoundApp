import { ProfileForm } from "@/components/profile-form";

export default function ProfilePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">My Profile</h1>
        <p className="text-muted-foreground">View and edit your profile information.</p>
      </div>
      <ProfileForm />
    </div>
  );
}
