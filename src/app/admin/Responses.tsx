"use client";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import FormResponses from "./FormResponses";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Responses = ({ adminPassword }: { adminPassword: string | undefined }) => {
  const [allowAccess, setAllowAccess] = useState(false);
  const [password, setPassword] = useState("");
  const checkPassword = () => {
    if (password === adminPassword) {
      setAllowAccess(true);
    }
  };
  return (
    <main className="pt-20">
      <MaxWidthWrapper>
        {allowAccess ? (
          <FormResponses />
        ) : (
          <div className="flex min-h-screen flex-col items-center justify-center">
            <Card>
              <CardHeader>
                <h1 className="text-center text-xl font-semibold">
                  This is an admin only page
                </h1>
                <h3 className="text-center text-sm">
                  Enter password to access
                </h3>
              </CardHeader>
              <CardContent>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      checkPassword();
                  }}}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="my-2 flex justify-center">
                  <Button
                    onClick={() => {
                      checkPassword();
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </MaxWidthWrapper>
    </main>
  );
};

export default Responses;
