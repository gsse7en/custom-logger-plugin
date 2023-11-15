import Foundation

@objc public class CustomLogger: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
