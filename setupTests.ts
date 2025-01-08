import { vi } from "vitest";
import "@testing-library/jest-dom";

window.getComputedStyle = vi.fn().mockImplementation(() => ({
  getPropertyValue: vi.fn(),
}));
