import React from "react";
import { Bell, Lock, Mail, Shield } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const notificationPreferences = [
  {
    icon: Mail,
    title: "Email notifications",
    description: "Get emailed when something needs your attention.",
    enabled: true,
  },
  {
    icon: Bell,
    title: "Push notifications",
    description: "Receive push notifications on your devices.",
    enabled: true,
  },
  {
    icon: Shield,
    title: "Security alerts",
    description: "Get notified about new sign-ins to your account.",
    enabled: false,
  },
];

const SettingPage = () => {
  return (
    <main className="w-full h-full flex-1 flex-col space-y-5 mt-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              This information will be displayed publicly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="size-16">
                <AvatarImage src="/avatars/shadcn.jpg" alt="Albert Flores" />
                <AvatarFallback>AF</AvatarFallback>
              </Avatar>
              <div className="flex gap-2">
                <Button size="sm">Upload new photo</Button>
                <Button size="sm" variant="outline">
                  Remove
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" defaultValue="Albert Flores" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="albertf@gmail.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" defaultValue="Administrator" disabled />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" />
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save changes</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="size-4" />
              Password
            </CardTitle>
            <CardDescription>
              Update your password to keep your account secure.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="current-password">Current password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="new-password">New password</Label>
              <Input id="new-password" type="password" />
            </div>
            <Button className="w-full">Update password</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Choose what you want to be notified about.
          </CardDescription>
        </CardHeader>
        <CardContent className="divide-y">
          {notificationPreferences.map((pref) => (
            <div
              key={pref.title}
              className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <pref.icon className="size-4" />
                </span>
                <div>
                  <p className="font-medium">{pref.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {pref.description}
                  </p>
                </div>
              </div>
              <Button
                size="sm"
                variant={pref.enabled ? "default" : "outline"}
                className="w-20"
              >
                {pref.enabled ? "On" : "Off"}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  );
};

export default SettingPage;
