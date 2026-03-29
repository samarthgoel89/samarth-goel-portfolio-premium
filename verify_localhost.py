from playwright.sync_api import sync_playwright
import sys

def check_localhost():
    with sync_playwright() as p:
        try:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            print("Navigating to http://localhost:3000...")
            page.goto('http://localhost:3000', timeout=60000)
            page.wait_for_load_state('networkidle')
            title = page.title()
            print(f"Page Title: {title}")
            screenshot_path = 'd:/Antigravity/Samarth Goel Profile/localhost_screenshot.png'
            page.screenshot(path=screenshot_path)
            print(f"Screenshot saved to {screenshot_path}")
            browser.close()
            return True
        except Exception as e:
            print(f"Error: {e}")
            return False

if __name__ == "__main__":
    if check_localhost():
        sys.exit(0)
    else:
        sys.exit(1)
