import { render, screen } from "@testing-library/react";
import { mocked } from "jest-mock";
import { useSession } from "next-auth/react";
import { SignInButton } from ".";

jest.mock("next-auth/react");

describe("Header component", () => {
  it("renders correctly when user is not logged in", () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce({ data: null, status: "loading" });

    render(<SignInButton />);

    expect(screen.getByText("Signin with github")).toBeInTheDocument();
  });
});

describe("Header component", () => {
  it("renders correctly when user is logged in", () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce({
      data: {
        user: { name: "jhon doe", email: "jhon.does@example.com" },
        expires: "faek-expires",
      },
      status: "authenticated",
    });

    render(<SignInButton />);

    expect(screen.getByText("jhon doe")).toBeInTheDocument();
  });
});
